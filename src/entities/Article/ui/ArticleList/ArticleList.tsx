import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
        />
    );

    return (
        <div className={
            classNames(cls.ArticleList, {}, [className, cls[view]])
        }
        >
            {articles.length > 0
                ? articles.map((article) => renderArticle(article))
                : null}
        </div>
    );
};
