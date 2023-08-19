import { FC, useEffect } from 'react';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { useDispatch, useStore } from 'react-redux';
import {
    ReduxStoreWithManger, StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

interface DynamicModuleLoaderProps {
    name: StateSchemaKey;
    reducer: Reducer;
    removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        name,
        reducer,
        removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManger;
    const dispatch = useDispatch();

    useEffect(() => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} Reducer` });
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove(name);
                dispatch({ type: `@DEST Destroy ${name} Reducer` });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
