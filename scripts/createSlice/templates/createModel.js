const fs = require('fs/promises');

const reduxSliceTemplate = require('./reduxSliceTemplate');

const resolveRoot = require('../resolveRoot');

module.exports = async (layer, sliceName) => {
    const resolveModulePath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

    const createModelStructure = () => {
        try {
            fs.mkdir(resolveModulePath());
            fs.mkdir(resolveModulePath('types'));
            fs.mkdir(resolveModulePath('slices'));
            fs.mkdir(resolveModulePath('selectors'));
            fs.mkdir(resolveModulePath('services'));
        } catch (e) {
            console.log(`Создание model для слайса ${sliceName} не удалось`);
        }
    };

    const createReduxSlice = async () => {
        try {
            fs.writeFile(
                resolveModulePath('slices', `${sliceName}Slice.ts`),
                reduxSliceTemplate(sliceName),
            );
        } catch (e) {
            console.log('Ошибка при создании редакс-слайса', e);
        }
    };
};
