import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';
import {toggleFeatures} from "@/shared/lib/features";

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const Card = toggleFeatures({
        name: "isRedesigned",
        on: () => CardRedesigned,
        off: () => CardDeprecated
    })
    const Skeleton = toggleFeatures({
        name: "isRedesigned",
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated
    })

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
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
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
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
