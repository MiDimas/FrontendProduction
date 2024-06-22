import {
    CaseReducerActions, CreateSliceOptions, Slice, SliceCaseReducers,
} from '@reduxjs/toolkit/dist';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch';

type Action<
    State,
    CaseReducers extends SliceCaseReducers<State>
> = {useActions: () => CaseReducerActions<CaseReducers, string> };

type Result<State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
> = Slice<State, CaseReducers, Name> & Action<State, CaseReducers>;

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>): Result<State, CaseReducers, Name> {
    const slice = createSlice(options);
    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch();
        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions,
    };
}
