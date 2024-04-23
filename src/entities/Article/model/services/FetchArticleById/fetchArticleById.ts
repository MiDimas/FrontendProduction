import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string|undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;
        try {
            if (!articleId) {
                throw new Error('Не передан id статьи');
            }
            const response = await api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
