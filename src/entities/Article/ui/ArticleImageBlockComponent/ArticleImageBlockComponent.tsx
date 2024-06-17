import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    return (
        <div className={
            classNames(cls.ArticleImageBlockComponent, {}, [className])
        }
        >
            <AppImage
                src={block.src}
                alt={block.title}
                className={cls.img}
                fallback={<Skeleton width="100%" height="200px" />}
            />
            {block.title
                && (<Text text={block.title} align={TextAlign.CENTER} />)}
        </div>
    );
});
