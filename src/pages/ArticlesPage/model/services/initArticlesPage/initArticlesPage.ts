import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../FetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const sortParam = searchParams.get('sort') as ArticleSortField;
            const orderParam = searchParams.get('order') as SortOrder;
            const searchParam = searchParams.get('search');
            const typeParam = searchParams.get('type') as ArticleType;
            if (sortParam) {
                dispatch(articlesPageActions.setSort(sortParam));
            }
            if (orderParam) {
                dispatch(articlesPageActions.setOrder(orderParam));
            }
            if (searchParam) {
                dispatch(articlesPageActions.setSearch(searchParam));
            }
            if (typeParam) {
                dispatch(articlesPageActions.setType(typeParam));
            }
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
