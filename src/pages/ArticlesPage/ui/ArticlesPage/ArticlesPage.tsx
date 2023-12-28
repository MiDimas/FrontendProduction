import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from 'entities/Article/model/types/article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'entities/Article';
import { Page } from 'widgets/Page/Page';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import {
    initArticlesPage,
} from '../../model/services/initArticlesPage/initArticlesPage';
import {
    fetchNextArticlesPage,
} from '../../model/services/FetchNextArticlesPage/fetchNextArticlesPage';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
    getArticlesPageIsLoading,
} from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import {
    getArticlesPageError,
} from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';

interface ArticlesPageProps {
    className?: string;
}

const reducers:ReducersList = {
    articlesPage: articlesPageReducer,
};

/* eslint-enable max-len */
const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={
                    classNames(cls.ArticlesPage, {}, [className])
                }
            >
                <Text title={t('Страница статей')} />
                <ArticlesPageFilters />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
