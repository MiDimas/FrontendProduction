import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from 'entities/Article/model/types/article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

/* eslint-enable max-len */
const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
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
    );
};

export default memo(ArticlesPage);
