import { createSelector } from '@reduxjs/toolkit';
import {
    getScrollRestoreScroll,
} from 'features/ScrollRestore/model/selectors/getScrollRestoreScroll/getScrollRestoreScroll';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollRestoreScrollByPath = createSelector(
    getScrollRestoreScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
