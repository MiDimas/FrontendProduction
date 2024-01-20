import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ComponentType, HTMLAttributeAnchorTarget, ReactNode, useCallback, useRef,
} from 'react';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    Header?: ReactNode;
    onScrollEnd?: ()=> void;
}
const getSkeleton = (view: ArticleView) => new Array(3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));

const SkeletonBig = () => <ArticleListItemSkeleton className={cls.card} view={ArticleView.BIG} />;
const SkeletonSmall = () => (
    <ArticleListItemSkeleton className={cls.card} view={ArticleView.SMALL} />
);
export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onScrollEnd,
        Header,
    } = props;
    const { t } = useTranslation('article');
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
            target={target}
        />
    );
    const skeleton = useCallback(() => (<div className={cls[view]}>{getSkeleton(view)}</div>
    ), [view]);

    if (!isLoading && !articles.length) {
        return <div className={className}>{t('Статьи не найдены')}</div>;
    }

    return (
        <div className={
            classNames(cls.ArticleList, {}, [className, cls[view]])
        }
        >
            {/* {articles.length > 0 */}
            {/*    ? articles.map((article) => renderArticle(article)) */}
            {/*    : null} */}
            {view === ArticleView.BIG
                ? (
                    <Virtuoso
                        style={{ height: '100%' }}
                        totalCount={articles.length}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onScrollEnd}
                        components={{
                            Header: Header as ComponentType,
                            ScrollSeekPlaceholder: SkeletonBig,
                            Footer: isLoading ? skeleton : undefined,
                        }}
                    />
                )
                : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        style={{ height: '100%', width: '100%' }}
                        totalCount={articles.length}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onScrollEnd}
                        listClassName={cls.SMALL}
                        components={{
                            Header: Header as ComponentType,
                            ScrollSeekPlaceholder: SkeletonSmall,
                            Footer: skeleton,
                        }}
                    />

                )}

        </div>
    );
};
// export const ArticleList = (props: ArticleListProps) => {
//     const { articles, ...other } = props;
//     return (
//         <VirtuosoGrid
//             // className={classNames(cls.ArticleList, {}, [className, cls[view]])}
//             style={{ height: '60%' }}
//             totalCount={10}
//             data={articles}
//             components={{
//                 List: () => ListItems(props),
//
//             }}
//             ref={null}
//         />
//     );
// };
