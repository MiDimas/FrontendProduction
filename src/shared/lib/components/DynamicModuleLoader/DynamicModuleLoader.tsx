import { Reducer } from '@reduxjs/toolkit';
import {ReactNode, useEffect, useState} from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManger, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

type ReducersListEntry = [StateSchemaKey, Reducer?] | undefined;
interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children?: ReactNode;
}
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount } = props;
    const [isMount, setIsMount] = useState(false);
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
                dispatch({
                    type: `@INIT ${name} Reducer`,
                });
            }
        });
        setIsMount(true);
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach((value: ReducersListEntry) => {
                    if (!value) {
                        return;
                    }
                    const [name] = value;
                    store.reducerManager.remove(name);
                    dispatch({
                        type: `@DEST Destroy ${name} Reducer`,
                    });
                });
                setIsMount(false);
            }
        };
        // eslint-disable-next-line
    }, []);
    if(isMount){
        return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>{children}</>
        );
    }
    return null;
};
