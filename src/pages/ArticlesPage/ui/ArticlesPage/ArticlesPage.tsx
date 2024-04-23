import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers:ReducersList = {
    articlesPage: articlesPageReducer,
};

/* eslint-enable max-len */
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={
                    classNames(cls.ArticlesPage, {}, [className])
                }
            >
                <ArticleInfiniteList header={ArticlesPageFilters} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
