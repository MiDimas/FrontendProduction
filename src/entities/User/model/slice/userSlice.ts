import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/User';
import { setFeatureFlags } from '@/shared/lib/features';
import {saveJsonSettings} from '../services/saveJsonSettings';
import {loadUserData} from '../services/loadUserData';

const initialState: UserSchema = {
    _initial: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features)
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
                loadUserData.fulfilled,
                (state, {payload}) => {
                    if(payload){
                        state.authData = {...state.authData, ...payload}
                        setFeatureFlags(payload.features);
                    }
                    state._initial = true;
                }
            )
            .addCase(
                loadUserData.rejected,
                (state) => {
                    state._initial = true;
                }
            )
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
