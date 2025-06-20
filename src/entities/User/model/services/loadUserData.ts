import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {User} from "../types/User";
import {uploadUserDataQuery} from '../../api/userApi'
import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localstorage";

export const loadUserData= createAsyncThunk<User,  undefined, ThunkConfig<string>>(
    'userData/fetchUserById',
    async (_, thunkAPI) => {
        const {rejectWithValue, getState, dispatch} = thunkAPI;
        const  userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        try {
            if (!userId) {
                throw new Error('Вы не авторизованы');
            }
            const response = await dispatch(uploadUserDataQuery(userId)).unwrap();
            if (!response) {
                throw new Error('Такого пользователя нет');
            }
            return response;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
