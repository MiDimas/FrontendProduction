const fs = require('fs');
const resolveRoot = require('../resolveRoot');

module.exports = async (layer, sliceName) => {
    try {
        await fs.mkdir(resolveRoot('src', layer, sliceName));
    } catch (e) {
        console.log(`Не удалось создать директорию для слайса ${sliceName}`);
    }
};
