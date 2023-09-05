import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const loginByUsername = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;
        try {
            const response = await api.get<Profile>('/profile');

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
