import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { getArticlesPageType } from '../../selectors/getArticlesPageType/getArticlesPageType';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageNum } from '../../selectors/getArticlesPageNum/getArticlesPageNum';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';

interface FetchArticlesListProps {
    replace?: boolean;
}
export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { api } = extra;
        const page = getArticlesPageNum(getState());
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());
        const order = getArticlesPageOrder(getState());
        const type = getArticlesPageType(getState());
        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await api.get<Article[]>(
                '/articles',
                {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type_like: type === ArticleType.ALL ? undefined : type,
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
