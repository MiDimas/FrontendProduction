import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getScrollRestoreVirtuosoScroll,
} from '../getScrollRestoreVirtuosoScroll/getScrollRestoreVirtuosoScroll';

export const getScrollRestoreVirtuosoScrollByPath = createSelector(
    getScrollRestoreVirtuosoScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || undefined,
);
