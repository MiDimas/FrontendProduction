import { StateSchema } from './config/StateSchema';
import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

createReduxStore();
export {
    createReduxStore,
    StoreProvider,
    StateSchema,
};
