import { ImportDeclaration, Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sources = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentDirs = sharedUiDirectory?.getDirectories();
function isAbsolute(value: string) {
    const paths = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return paths.some((path) => value.startsWith(path));
}
componentDirs?.forEach((directory) => {
    console.log(directory.getBaseName());
    const indexPath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexPath);
    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}';
`;
        const file = directory.createSourceFile(indexPath, sourceCode, { overwrite: true });
        file.save();
    }
});

sources.forEach((source) => {
    const imports = source.getImportDeclarations();
    imports.forEach((importDec) => {
        const value = importDec.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        console.log(value);
        if (isAbsolute(value)) {
            importDec.setModuleSpecifier(`@/${value}`);
        }
        if (isAbsolute(valueWithoutAlias) && valueWithoutAlias.startsWith('shared/ui/')) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDec.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
