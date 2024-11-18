import {Project, SyntaxKind, Node, ts, JsxAttribute} from 'ts-morph';

const removeFeatureFlag = process.argv[2];
const featureState = process.argv[3];

const ToggleFeatureComponent = 'ToggleFeatures';
const ToggleFeatureFunction = 'toggleFeatures';

if(!removeFeatureFlag){
    throw Error('Укажите название фича флага');
}
if(!featureState){
    throw Error('Не указано состояние. Укажите состояние фича флага которое должно сохраниться');
}

if(featureState !== 'on' && featureState !== 'off') {
    throw Error('Некорректное состояние. Укажите состояние либо (on либо off)')
}

const project = new Project();

project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx')
// TODO
// project.addSourceFilesAtPaths('src/**/*.ts');
// project.addSourceFilesAtPaths('src/**/*.tsx');

const sources = project.getSourceFiles();

function isToggleFunction (node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if(
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === ToggleFeatureFunction
        ){
            isToggleFeatures = true;
        }
    })
    return isToggleFeatures;

}

function isToggleComponent (node: Node): boolean {
    let isToggleFeatures = false;
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    if(identifier){
        if (identifier.getText() === ToggleFeatureComponent) isToggleFeatures=true;
    }
    else{
        node.forEachChild((child) => {
            if(
                child.isKind(SyntaxKind.Identifier) &&
                child.getText() === ToggleFeatureComponent
            ){
                isToggleFeatures = true;
            }
        })
    }
    return isToggleFeatures;
}

function replaceToggleFunction(node:Node<ts.Node>) {
        const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)

        if(!objectOptions) return;

        const offFunctionProperty = objectOptions.getProperty('off');
        const onFunctionProperty = objectOptions.getProperty('on');

        const nameProperty = objectOptions.getProperty('name');

        const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
        const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

        const featureName = nameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
            ?.getText()
            .slice(1, -1);

        if(featureName !== removeFeatureFlag) return;

        if(featureState === 'on'){
            node.replaceWithText(onFunction?.getBody().getText() ?? '');
        }
        if(featureState === 'off'){
            node.replaceWithText(offFunction?.getBody().getText() ?? '');
        }
}

function getAttributeByName (
    jsxAttribute: JsxAttribute[],
    name: string
) {
    return jsxAttribute.find((node) => node.getNameNode().getText() === name)
}
function replaceToggleComponent(node:Node<ts.Node>) {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    // console.log(attributes);
    const featureNameAttribute = getAttributeByName(attributes, 'feature')
    if(!featureNameAttribute) return;
    const featureName = featureNameAttribute.getInitializer()?.getText()?.slice(1, -1);
    if(featureName !== removeFeatureFlag) return;
    const stateAttribute = getAttributeByName(attributes, featureState);
    let content = '';
    if(stateAttribute){
        const init = stateAttribute.getInitializer();
        if(init){
            let initContent = init.getText();
            let fixed = true;
            while(fixed){
                fixed = false;
                if (initContent.startsWith('{')) {
                    initContent = initContent.slice(1, -1);
                    fixed = true;
                }
                if (initContent.startsWith('(')) {
                    initContent = initContent.slice(1, -1);
                    fixed = true;
                }
            }

            // console.log(initContent);
            if(initContent) content = initContent;
        }
    }
    node.replaceWithText(content);
}

sources.forEach((source) => {
    source.forEachDescendant( node => {
        if(node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)){
            replaceToggleFunction(node);
        }
        if(node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)){
            replaceToggleComponent(node);
        }
        // console.log(node , node.isKind(SyntaxKind.JsxClosingElement));
    })
});

project.save();
