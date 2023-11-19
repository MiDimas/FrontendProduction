import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className,
        article,
        view,
    } = props;
    return (
        <div className={
            classNames(cls.ArticleListItem, {}, [className])
        }
        >
            {article.title}
        </div>
    );
});
