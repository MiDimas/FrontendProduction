import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/User';
import { setFeatureFlags } from '@/shared/lib/features';
import {saveJsonSettings} from '../services/saveJsonSettings';

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
                    console.log(payload)
                    state.authData.jsonSettings = payload
                }
            }
        )
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
