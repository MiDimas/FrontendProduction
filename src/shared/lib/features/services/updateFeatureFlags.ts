import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {FeatureFlags} from "@/shared/types/featureFlags/featureFlags";
import {updateFeatureFlagsMutation} from '../api/featureFlagsApi';
import {getAllFeatureFlags} from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}
export const updateFeatureFlags = createAsyncThunk<void, UpdateFeatureFlagsOptions, ThunkConfig<string>>(
    'user/updateFeatureFlags',
    // eslint-disable-next-line consistent-return
    async ({userId, newFeatures}, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        try {

            await dispatch(updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures
                }
            })).unwrap()
            window.location.reload();

        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
