import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title &&
                <ToggleFeatures feature="isRedesigned"
                off={
                    <TextDeprecated title={block.title} className={cls.title} />
                }
                on={
                    <Text title={block.title} className={cls.title} />
                } />
            }
            {block.paragraphs.map((paragraph) => (
                <ToggleFeatures feature="isRedesigned"
                    off={
                        <TextDeprecated key={paragraph} text={paragraph} className={cls.paragraph} />
                    }
                    on={
                        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
                    } />

            ))}
        </div>
    );
});
