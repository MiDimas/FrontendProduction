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
import { fetchArticlesList } from '../../model/services/FetchArticlesList/fetchArticlesList';
import {
    articlePageActions,
    articlePageReducer,
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
    articlesPage: articlePageReducer,
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
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(articlePageActions.setView(newView));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={
                classNames(cls.ArticlesPage, {}, [className])
            }
            >
                <Text title={t('Страница статей')} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
