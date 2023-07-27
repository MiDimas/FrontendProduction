import {combineReducers, configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from '../config/StateSchema';
import {userReducer} from "entities/User";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    };
    return configureStore<StateSchema>(
        {
            reducer: rootReducer,
            devTools: __IS_DEV__,
            preloadedState: initialState,
        },
    );
}