import {useSelector} from "react-redux";
import {useCallback} from "react";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getArticlesPageView} from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import {getArticlesPageSort} from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import {getArticlesPageOrder} from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import {getArticlesPageSearch} from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import {getArticlesPageType} from '../../model/selectors/getArticlesPageType/getArticlesPageType';
import {fetchArticlesList} from '../../model/services/FetchArticlesList/fetchArticlesList';
import {useDebounce} from "@/shared/lib/hooks/useDebounce/useDebounce";
import {ArticleSortField, ArticleType, ArticleView} from "@/entities/Article";
import {articlesPageActions} from '../../model/slices/articlesPageSlice';
import {SortOrder} from "@/shared/types";
import {TabItem} from "@/shared/ui/deprecated/Tabs";

export function useArticleFilters () {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 700);

    const onChangeView = useCallback(
        (newView: ArticleView) => {
            dispatch(articlesPageActions.setView(newView));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeType = useCallback(
        (newType: TabItem<ArticleType>) => {
            dispatch(articlesPageActions.setType(newType.value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData],
    );
    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeType,
        onChangeSearch,
    }
}