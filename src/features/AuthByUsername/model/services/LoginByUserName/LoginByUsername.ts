import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import axios from 'axios';

interface LoginByUsernameProps {
    username: string;
    password: string;
}
export const LoginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUserame',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
