import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
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

    if (view === ArticleView.BIG) {
        return (
            <div className={
                classNames(cls.ArticleListItem, {}, [className, cls[view]])
            }
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="100%" />
                        <Skeleton width={150} height={16} className={cls.user} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />

                    <div className={cls.footer}>
                        <Skeleton height={32} width={120} />
                        <Skeleton className={cls.views} height={16} width={48} />
                        <Skeleton height={16} width={16} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={
            classNames(cls.ArticleListItem, {}, [className, cls[view]])
        }
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton className={cls.types} height={16} width={115} />
                    <Skeleton className={cls.views} height={16} width={48} />
                    <Skeleton height={16} width={16} />
                </div>
                <Skeleton height={16} className={cls.title} />
            </Card>

        </div>
    );
});
