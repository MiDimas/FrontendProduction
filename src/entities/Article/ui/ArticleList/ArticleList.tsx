import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ComponentType,
    HTMLAttributeAnchorTarget,
    ReactNode,
    useCallback,
    useRef,
} from 'react';
import {
    Virtuoso, VirtuosoGrid,
    VirtuosoGridHandle,
    VirtuosoHandle,
} from 'react-virtuoso';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getScrollRestoreVirtuosoScrollByPath, scrollRestoreAction,
} from 'features/ScrollRestore';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
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
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scroll = useSelector((state: StateSchema) => (
        getScrollRestoreVirtuosoScrollByPath(state, pathname)
    ));
    const { t } = useTranslation('article');
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
    const virtuosoRef = useRef<VirtuosoHandle>(null);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
            target={target}
            onClickItem={() => dispatch(scrollRestoreAction.setVirtuosoScrollIndex({ path: pathname, index }))}
        />
    );
    const skeleton = useCallback(() => (
        <div className={classNames(cls.footer, {}, [cls[view]])}>{getSkeleton(view)}</div>
    ), [view]);

    useInitialEffect(() => {
        if (scroll) {
            if (virtuosoGridRef.current) {
                setTimeout(() => {
                    virtuosoGridRef.current?.scrollToIndex({
                        index: scroll,
                        behavior: 'smooth',
                    });
                }, 100);
            }
            if (virtuosoRef.current) {
                setTimeout(() => {
                    virtuosoRef.current?.scrollToIndex({
                        index: scroll,
                        behavior: 'smooth',
                    });
                }, 100);
            }
        }
    });

    if (!isLoading && !articles.length) {
        return <div className={className}>{t('Статьи не найдены')}</div>;
    }

    return (
        <div className={
            classNames(cls.ArticleList, {}, [cls[view], className])
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
                            Footer: isLoading ? skeleton : undefined,
                        }}
                        ref={virtuosoRef}
                    />
                )
                : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        style={{
                            height: '100%', width: '100%',
                        }}
                        totalCount={articles.length}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onScrollEnd}
                        listClassName={cls.SMALL}
                        atBottomStateChange={(atBottom) => {
                            if (atBottom) {
                                onScrollEnd?.();
                            }
                        }}
                        components={{
                            Header: Header as ComponentType,
                            Footer: isLoading ? skeleton : undefined,
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
