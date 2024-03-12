const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (layer, sliceName) => {
    const componentName = firstCharUpperCase(sliceName);
    fs.writeFile(
        resolveRoot('src', layer, sliceName, 'index.ts'),
        `export { ${componentName}Schema } from './model/types/${sliceName}Schema';
export { ${componentName} } from './ui/${componentName}/${componentName}';
`,
    );
};
