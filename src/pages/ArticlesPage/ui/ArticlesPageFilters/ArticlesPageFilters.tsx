import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import {
    ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
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

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
    }, [dispatch]);

    return (
        <div className={
            classNames(cls.ArticlesPageFilters, {}, [className])
        }
        >
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} />
            </Card>

        </div>
    );
};
