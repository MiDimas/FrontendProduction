import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/ProfileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../ValidateProfileData/ValidateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;
        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await api.put<Profile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
