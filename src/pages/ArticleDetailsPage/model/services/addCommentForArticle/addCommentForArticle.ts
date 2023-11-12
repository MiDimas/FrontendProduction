import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import {
    getArticleDetailsData,
} from 'entities/Article';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetailsPage/addCommentForArticle',
    async (text, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
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
            dispatch(fetchCommentsByArticleId(articleData.id));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
