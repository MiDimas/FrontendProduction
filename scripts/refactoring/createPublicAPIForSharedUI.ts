import { Project } from 'ts-morph';
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
});

// sources.forEach((source) => {
//     const imports = source.getImportDeclarations();
//     imports.forEach((importDec) => {
//         const value = importDec.getModuleSpecifierValue();
//         if (isAbsolute(value)) {
//             importDec.setModuleSpecifier(`@/${value}`);
//         }
//     });
// });

project.save();
