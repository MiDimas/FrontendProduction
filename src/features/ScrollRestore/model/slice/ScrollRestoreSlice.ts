import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestoreSchema } from 'features/ScrollRestore';
import { StateSnapshot } from 'react-virtuoso';

const initialState: ScrollRestoreSchema = {
    scroll: {},
    virtuosoScroll: {},
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

        setVirtuosoScrollIndex: (
            state,
            { payload }: PayloadAction<{path:string; snap: StateSnapshot;}>,
        ) => {
            state.virtuosoScroll[payload.path] = payload.snap;
        },
    },
});

export const { actions: scrollRestoreAction } = scrollRestoreSlice;
export const { reducer: scrollRestoreReducer } = scrollRestoreSlice;
