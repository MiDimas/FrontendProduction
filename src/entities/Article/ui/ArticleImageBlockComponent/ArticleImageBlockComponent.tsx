import { memo } from 'react';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import {Text as TextDeprecated, TextAlign} from '@/shared/ui/deprecated/Text';
import {Text} from '@/shared/ui/redesigned/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <AppImage
                src={block.src}
                alt={block.title}
                className={cls.img}
                fallback={
                    <ToggleFeatures feature="isRedesigned"
                        off={
                            <SkeletonDeprecated width="100%" height="200px" />
                        }
                        on={
                            <Skeleton width="100%" height="200px" />
                        }
                    />
                }
            />
            {block.title &&
                <ToggleFeatures feature="isRedesigned"
                    off={
                        <TextDeprecated text={block.title} align={TextAlign.CENTER}  />
                    }
                    on={
                        <Text text={block.title} align="center" />
                    }
                />
            }
        </div>
    );
});
