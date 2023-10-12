import { StateSchema } from 'app/providers/StoreProvider';

export const getUserInitial = (state: StateSchema) => state.user._initial;
