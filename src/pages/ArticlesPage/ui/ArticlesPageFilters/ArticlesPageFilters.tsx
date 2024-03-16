import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import {
    ArticleSortField, ArticleSortSelector, ArticleType, ArticleView, ArticleViewSelector,
    ArticleTypeTabs,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchArticlesList } from '../../model/services/FetchArticlesList/fetchArticlesList';
import {
    getArticlesPageSearch,
} from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageSort,
} from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import {
    getArticlesPageOrder,
} from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import {
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import cls from './ArticlesPageFilters.module.scss';
import {
    getArticlesPageType,
} from '../../model/selectors/getArticlesPageType/getArticlesPageType';

interface ArticlesPageFiltersProps extends Object{
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const { className } = props;
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

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeType = useCallback((newType: TabItem<ArticleType>) => {
        dispatch(articlesPageActions.setType(newType.value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    return (
        <VStack
            gap="16"
            className={
                classNames(cls.ArticlesPageFilters, {}, [className])
            }
        >
            <HStack align="center" justify="between" className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </HStack>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />

        </VStack>
    );
};
