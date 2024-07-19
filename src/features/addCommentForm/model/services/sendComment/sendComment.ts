import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { getAddCommentFormText } from '../../selectors/getAddCommentFormText/getAddCommentFormText';
import { addCommentFormActions } from '../../slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkApi;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const articleData = getArticleDetailsData(getState());

        if (!userData || !articleData || !text) {
            return rejectWithValue('error');
        }
        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: articleData.id,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentFormActions.setText(''));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
