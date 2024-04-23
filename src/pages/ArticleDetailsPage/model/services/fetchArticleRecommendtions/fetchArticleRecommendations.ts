import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articlesDetailsPage/fetchArticlesRecommendations',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        const { api } = extra;
        try {
            const response = await api.get<Article[]>(
                '/articles',
                {
                    params: {
                        _expand: 'user',
                        _page: 1,
                        _limit: 4,
                    },
                },
            );
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
