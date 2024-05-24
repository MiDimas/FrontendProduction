import { useTranslation } from 'react-i18next';
import React, {
    FC,
    HTMLAttributeAnchorTarget,
    useCallback,
    useRef,
} from 'react';
import {
    Virtuoso, VirtuosoGrid,
    VirtuosoGridHandle,
    VirtuosoHandle,
} from 'react-virtuoso';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getScrollRestoreVirtuosoScrollByPath, scrollRestoreAction,
} from '@/features/ScrollRestore';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

type DirectionList = 'horizontal' | 'vertical'
interface ArticleListProps{
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    error?: string;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    Header?: FC;
    virtualized?: boolean;
    onScrollEnd?: ()=> void;
    direction?: DirectionList;
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
        virtualized,
        error,
        direction = 'horizontal',
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
            onClickItem={
                virtualized
                    ? () => dispatch(scrollRestoreAction.setVirtuosoScrollIndex({ path: pathname, index }))
                    : () => {}
            }
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
        if (Header) {
            return (
                <VStack className={
                    classNames(cls.ArticleList, {}, [cls[view], className])
                }
                >
                    <Header />
                    {
                        error
                            ? <Text text={t('Произошла ошибка')} />
                            : <Text text={t('Статьи не найдены')} />
                    }
                </VStack>
            );
        }
        return <div className={className}>{t('Статьи не найдены')}</div>;
    }

    if (!virtualized) {
        if (direction === 'horizontal') {
            return (
                <HStack max className={cls.recommendation}>
                    {articles.map((article) => renderArticle(Number(article.id), article))}
                </HStack>
            );
        }
        if (direction === 'vertical') {
            return (
                <VStack max>
                    {articles.map((article) => renderArticle(Number(article.id), article))}
                </VStack>
            );
        }
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
                            Header,
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
                            Header,
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
