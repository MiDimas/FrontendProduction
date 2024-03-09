const fs = require('fs/promises');

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
};
