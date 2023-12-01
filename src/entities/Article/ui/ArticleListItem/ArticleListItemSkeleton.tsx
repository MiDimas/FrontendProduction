import { ArticleView } from 'entities/Article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    const types = <Skeleton className={cls.types} height={16} width={115} />;
    const views = (
        <>
            <Skeleton className={cls.views} height={16} width={48} />
            <Skeleton height={16} width={16} />
        </>
    );
    const title = <Skeleton height={16} className={cls.title} />;
    const image = <Skeleton className={cls.img} />;

    if (view === ArticleView.BIG) {
        // return (
        // <div className={
        //     classNames(cls.ArticleListItem, {}, [className, cls[view]])
        // }
        // >
        //     <Card className={cls.card}>
        //         <div className={cls.header}>
        //             <Avatar size={30} src={article.user.avatar} />
        //             <Text text={article.user.username} className={cls.user} />
        //             <Text text={article.createdAt} className={cls.date} />
        //         </div>
        //         {title}
        //         {types}
        //         {image}
        //         <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
        //         <div className={cls.footer}>
        //             <Button theme={ButtonTheme.OUTLINE} onClick={onClickArticle}>
        //                 {`${t('Читать далее')}...`}
        //             </Button>
        //             {views}
        //         </div>
        //     </Card>
        // </div>
        // );
    }
    return (
        <div className={
            classNames(cls.ArticleListItem, {}, [className, cls[view]])
        }
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    {image}
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                {title}
            </Card>

        </div>
    );
});
