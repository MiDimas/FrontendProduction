import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;
    const store = createReduxStore(
        initialState,
        asyncReducers,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
