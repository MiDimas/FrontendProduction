const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const createModel = require('./createModel');
const createUI = require('./createUI');
const createPublicAPI = require('./createPublicAPI');

module.exports = async (layer, sliceName) => {
    try {
        await fs.mkdir(resolveRoot('src', layer, firstCharUpperCase(sliceName)));
    } catch (e) {
        console.log(`Не удалось создать директорию для слайса ${sliceName}`);
    }

    await createModel(layer, sliceName);
    await createUI(layer, sliceName);
    await createPublicAPI(layer, sliceName);
};
