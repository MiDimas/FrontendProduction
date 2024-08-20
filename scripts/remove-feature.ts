import { Project, SyntaxKind, Node } from 'ts-morph';

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
            child.getText() === 'toggleFeatures'
        ){
            isToggleFeatures = true;
        }
    })
    return isToggleFeatures;

}

sources.forEach((source) => {
    source.forEachDescendant( node => {
        if(node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)){
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)

            if(!objectOptions) return;

            const offFunctionProperty = objectOptions.getProperty('off');
            const onFunctionProperty = objectOptions.getProperty('on');

            const nameProperty = objectOptions.getProperty('name');

            console.log(nameProperty?.getText())
            console.log(offFunctionProperty?.getText())

        }
    })
});

project.save();
