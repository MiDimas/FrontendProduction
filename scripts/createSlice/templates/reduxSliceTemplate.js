const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
    const typeName = `${firstCharUpperCase(sliceName)}Schema`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${sliceName}Schema';

const initialState: ${typeName} = {
    
};
const ${sliceName}Slice = createSlice({
    name: '${sliceName}Slice',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
        },
    },
//    extraReducers: (builder) => {
//        builder
//            .addCase(fetchArticlesList.pending, (state, action) => {
//                state.isLoading = true;
//                state.error = undefined;
//            })
//            .addCase(fetchArticlesList.fulfilled, (state, action) => {
//                state.isLoading = false;
//            })
//            .addCase(fetchArticlesList.rejected, (state, action) => {
//                state.isLoading = false;
//                state.error = action.payload;
//            });
//    },
});

export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;
export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
`;
};
