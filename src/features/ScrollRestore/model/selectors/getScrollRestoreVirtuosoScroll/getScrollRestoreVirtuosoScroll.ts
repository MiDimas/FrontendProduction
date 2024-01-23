import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollRestoreVirtuosoScroll = (state: StateSchema) => (
    state.scrollRestore.virtuosoScroll
);
