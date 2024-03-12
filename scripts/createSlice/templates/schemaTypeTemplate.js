const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
    const typeName = `${firstCharUpperCase(sliceName)}Schema`;

    return `export interface ${typeName} {

}
`;
};
