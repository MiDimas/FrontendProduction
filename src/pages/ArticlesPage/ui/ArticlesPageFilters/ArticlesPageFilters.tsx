import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import {
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageView/getArticlesPageView';
import { Select } from 'shared/ui/Select/Select';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    return (
        <div className={
            classNames(cls.ArticlesPageFilters, {}, [className])
        }
        >
            <div className={cls.sortWrapper}>
                <Select label={t('Сортировать ПО')} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} />
            </Card>

        </div>
    );
};
