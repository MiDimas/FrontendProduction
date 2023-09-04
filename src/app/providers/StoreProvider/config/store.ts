import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { StateSchema } from '../config/StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };
    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore(
        {
            reducer: reducerManager.reduce,
            devTools: __IS_DEV__,
            preloadedState: initialState,
            middleware: (getDefaultMiddleware) => (
                getDefaultMiddleware({
                    thunk: {
                        extraArgument: {
                            api: $api,
                            navigate,
                        },
                    },
                })
            ),
        },
    );
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
};
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
