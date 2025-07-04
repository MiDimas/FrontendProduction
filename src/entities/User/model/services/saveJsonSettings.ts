import {createAsyncThunk} from "@reduxjs/toolkit";
import {JsonSettings} from '../types/jsonSettings';
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {getUserAuthData} from "../selectors/getUserAuthData/getUserAuthData";
import {getJsonSettings} from '../selectors/jsonSettings/jsonSettings';
import {setJsonSettingsMutation} from '../../api/userApi';
import {LOCAL_STORAGE_LAST_DESIGN_KEY} from "@/shared/const/localstorage";


export const saveJsonSettings = createAsyncThunk<
    JsonSettings, JsonSettings, ThunkConfig<string>
>("user/saveUserJsonSettings",
    async (newJsonSettings, thunkAPI) => {
    const {rejectWithValue, getState, dispatch} = thunkAPI;
    const userAuthData = getUserAuthData(getState());
    const currentJsonSettings = getJsonSettings(getState())
    if (!userAuthData) {
        return rejectWithValue("")
    }
    try {
        const response = await dispatch(setJsonSettingsMutation({
        jsonSettings : {
            ...currentJsonSettings,
            ...newJsonSettings
        },
        userId: userAuthData.id
        })).unwrap();
        if(!response.jsonSettings){
            return rejectWithValue('');
        }
        localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, response.features?.isRedesigned ? 'new' : 'old' )
        return response.jsonSettings;
    }
    catch(e){
        return rejectWithValue("")
    }
})