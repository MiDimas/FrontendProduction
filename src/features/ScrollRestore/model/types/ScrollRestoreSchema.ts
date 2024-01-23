import { StateSnapshot } from 'react-virtuoso';

export type ScrollSchema = Record<string, number>
export type ScrollVirtuosoSchema = {[key in string]: StateSnapshot};
export interface ScrollRestoreSchema {
    scroll: ScrollSchema,
    virtuosoScroll: ScrollVirtuosoSchema
}
