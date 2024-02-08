import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getScrollRestoreScroll,
} from '../getScrollRestoreScroll/getScrollRestoreScroll';

export const getScrollRestoreScrollByPath = createSelector(
    getScrollRestoreScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
