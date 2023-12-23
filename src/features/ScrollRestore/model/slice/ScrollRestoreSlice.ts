import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestoreSchema } from 'features/ScrollRestore';

const initialState: ScrollRestoreSchema = {
    scroll: {},
};
export const scrollRestoreSlice = createSlice({
    name: 'scrollRestore',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{path: string; position: number;}>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollRestoreAction } = scrollRestoreSlice;
export const { reducer: scrollRestoreReducer } = scrollRestoreSlice;
