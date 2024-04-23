import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onClickItem?: () => void;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
        onClickItem,
    } = props;
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack align="center" gap="8">
            <Text text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </HStack>
    );
    const title = <Text text={article.title} className={cls.title} />;
    const image = <img src={article.img} alt={article.title} className={cls.img} />;

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={
                classNames(cls.ArticleListItem, {}, [className, cls[view]])
            }
            >
                <Card className={cls.card}>
                    <HStack align="center" justify="between">
                        <HStack align="center" gap="8">
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} className={cls.user} />
                        </HStack>
                        <Text text={article.createdAt} className={cls.date} />
                    </HStack>
                    {title}
                    {types}
                    {image}
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    <HStack align="center" justify="between" max className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article.id} target={target}>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onClickItem}>
                                {`${t('Читать далее')}...`}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </Card>
            </div>
        );
    }
    return (
        <div className={
            classNames(cls.ArticleListItem, {}, [className, cls[view]])
        }
        >
            <AppLink
                to={RoutePath.article_details + article.id}
                className={cls.link}
                target={target}
            >
                <Card className={cls.card} onClick={onClickItem}>
                    <div className={cls.imageWrapper}>
                        {image}
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <HStack max justify="between" align="center" className={cls.infoWrapper}>
                        {types}
                        {views}
                    </HStack>
                    {title}
                </Card>
            </AppLink>
        </div>
    );
});
