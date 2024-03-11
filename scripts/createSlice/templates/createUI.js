const fs = require('fs');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const styleTemplate = require('./styleTemplate');
const storyTemplate = require('./storyTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Не удалось создание директории UI');
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName));
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                styleTemplate(componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.stories.tsx`),
                storyTemplate(componentName, layer),
            );
        } catch (e) {
            console.log('Не получилось создать компонент');
        }
    };

    await createUIDir();
};
