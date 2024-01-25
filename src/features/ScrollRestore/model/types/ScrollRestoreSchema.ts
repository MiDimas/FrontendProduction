export type ScrollSchema = Record<string, number>
export type ScrollVirtuosoSchema = {[key in string]: number};
export interface ScrollRestoreSchema {
    scroll: ScrollSchema,
    virtuosoScroll: ScrollVirtuosoSchema
}
