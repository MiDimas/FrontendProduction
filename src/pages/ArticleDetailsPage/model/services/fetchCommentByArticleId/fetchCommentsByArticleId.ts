import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetailsPage/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;
        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await api.get<Comment[]>('/comments', {
                params: {
                    articleId,
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
