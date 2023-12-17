import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
} from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { getArticlesPageNum } from '../../selectors/getArticlesPageNum/getArticlesPageNum';
import {
    getArticlesPageIsLoading,
} from '../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../FetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({ page: page + 1 }));
        }
    },
);
