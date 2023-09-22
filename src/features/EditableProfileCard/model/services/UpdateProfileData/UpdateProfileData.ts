import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;
        const formData = getProfileForm(getState());
        try {
            const response = await api.put<Profile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
