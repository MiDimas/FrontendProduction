import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';
import {ArticlePageGreeting} from '@/features/ArticlePageGreeting';
import {ToggleFeatures} from "@/shared/lib/features";
import {StickyLayout} from "@/shared/layouts/StickyLayout";
import {ViewSelectorContainer} from '../ViewSelectorContainer';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

/* eslint-enable max-len */
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const content = (
        <ToggleFeatures feature='isRedesigned'
            on={
                <Page
                    className={classNames(cls.ArticlesPage, {}, [className])}
                    data-testid="ArticlesPage"
                >
                    <StickyLayout
                        className={cls.articlesList}
                        content={<ArticleInfiniteList />}
                        left={<ViewSelectorContainer />}
                    />
                    <ArticlePageGreeting />
                </Page>
            }
            off={
                <Page
                    className={classNames(cls.ArticlesPage, {}, [className])}
                    data-testid="ArticlesPage"
                >
                    <ArticleInfiniteList header={ArticlesPageFilters} />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
