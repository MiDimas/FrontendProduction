import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageView/getArticlesPageLimit';

interface FetchArticlesListProps {
    page?: number;
}
export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { page = 1 } = props;
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;
        const limit = getArticlesPageLimit(getState());
        try {
            const response = await api.get<Article[]>(
                '/articles',
                {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
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
