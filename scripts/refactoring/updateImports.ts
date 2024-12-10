import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sources = project.getSourceFiles();

function isAbsolute(value: string) {
    const paths = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return paths.some((path) => value.startsWith(path));
}
function isSrc(value:string){
    return value.startsWith('@/shared/ui/') && !value.startsWith('@/shared/ui/deprecated/');
}
sources.forEach((source) => {
    const imports = source.getImportDeclarations();
    imports.forEach((importDec) => {
        const value = importDec.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDec.setModuleSpecifier(`@/${value}`);
        }
        // else if(isSrc(value)){
        //     const clearValue = value.replace('@/shared/ui/', '@/shared/ui/deprecated/');
        //     importDec.setModuleSpecifier(`${clearValue}`);
        // }
    });
});

project.save();
