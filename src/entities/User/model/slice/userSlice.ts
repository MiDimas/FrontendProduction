import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/User';
import { setFeatureFlags } from '@/shared/lib/features';
import {saveJsonSettings} from '../services/saveJsonSettings';
import {updateUserData} from '../services/updateUserData';

const initialState: UserSchema = {
    _initial: false,
    _updated: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                const json =  JSON.parse(user) as User;
                state.authData = json;
                setFeatureFlags(json.features);
            }
            state._initial = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, {payload}) => {
                if(state.authData) {
                    state.authData.jsonSettings = payload
                }
            }
        )
            .addCase(
                updateUserData.fulfilled,
                (state, {payload}) => {
                    if(state.authData){
                        state.authData = {...state.authData, ...payload}
                        setFeatureFlags(payload.features);
                        state._updated = true;
                    }
                }
            )
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
