import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManger, StateSchema, StateSchemaKey,
} from '@/app/providers/StoreProvider';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
};

type ReducersListEntry = [
    StateSchemaKey, Reducer?
] | undefined
interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children?: ReactNode;
}
export const DynamicModuleLoader = (props:DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManger;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach((value: ReducersListEntry) => {
            if (!value) {
                return;
            }
            const [name, reducer] = value;
            if (!reducer) {
                return;
            }
            if (!(name in mountedReducers)) {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} Reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach((value: ReducersListEntry) => {
                    if (!value) {
                        return;
                    }
                    const [name] = value;
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DEST Destroy ${name} Reducer` });
                });
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
