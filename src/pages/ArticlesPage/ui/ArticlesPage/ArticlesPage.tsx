import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from 'entities/Article/model/types/article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

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
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={
                classNames(cls.ArticlesPage, {}, [className])
            }
            >
                <Text title={t('Страница статей')} />
                <ArticleList
                    articles={[]}
                    view={ArticleView.BIG}
                    isLoading
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
