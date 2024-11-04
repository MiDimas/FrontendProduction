import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {User} from "../types/User";
import {getUserAuthData} from "../selectors/getUserAuthData/getUserAuthData"
import {uploadUserDataQuery} from '../../api/userApi'

export const updateUserData= createAsyncThunk<User,  undefined, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (_, thunkAPI) => {
        const {rejectWithValue, getState, dispatch} = thunkAPI;
        const  user = getUserAuthData(getState());
        try {
            if (!user) {
                throw new Error('Не залогинен');
            }
            if (!user.id){
                throw new Error('Вы не авторизованы');
            }
            const response = await dispatch(uploadUserDataQuery(user.id)).unwrap();
            if (!response) {
                throw new Error('Такого пользователя нет');
            }
            return response;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
