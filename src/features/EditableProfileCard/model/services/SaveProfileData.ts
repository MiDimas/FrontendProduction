import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';

export const saveProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/saveProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;
        const { profile } = getState();
        const form = profile?.form;
        try {
            const response = await api.post<Profile>('/profile', form);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
