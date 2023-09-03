import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/Profile';

const initialState:ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
