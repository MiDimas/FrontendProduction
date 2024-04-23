import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollRestoreScroll = (state: StateSchema) => state.scrollRestore.scroll;
