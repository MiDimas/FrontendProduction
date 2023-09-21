import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { saveProfileData } from 'features/EditableProfileCard/model/services/SaveProfileData';
import { ProfileSchema } from '../types/ProfileSchema';
import { fetchProfileData } from '../services/FetchProfileData';

const initialState:ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
    form: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(saveProfileData.pending, (state) => {
                state.isLoading = true;
                state.readonly = true;
                state.error = undefined;
            })
            .addCase(saveProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.readonly = true;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(saveProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.readonly = true;
                state.error = action.payload;
            });
    },
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
