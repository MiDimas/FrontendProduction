import {useTranslation} from "react-i18next";
import {ArticleListItemProps} from '../ArticleListItem';
import {Text} from "@/shared/ui/redesigned/Text";
import cls from '../ArticleListItem.module.scss';
import {HStack, VStack} from "@/shared/ui/redesigned/Stack";
import {Icon} from "@/shared/ui/redesigned/Icon";
import EyeIcon from "@/shared/assets/icons/Eye.svg";
import {AppImage} from "@/shared/ui/redesigned/AppImage";
import {Skeleton} from "@/shared/ui/redesigned/Skeleton";
import {ArticleBlockType, ArticleView} from "../../../model/consts/articleConsts";
import {ArticleTextBlock} from '../../../model/types/article';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Card} from "@/shared/ui/redesigned/Card";
import {Avatar} from "@/shared/ui/redesigned/Avatar";
import {AppLink} from "@/shared/ui/redesigned/AppLink";
import {getRouteArticleDetails} from "@/shared/const/router";
import {Button} from "@/shared/ui/redesigned/Button";

export const ArticleListItemRedesigned = (props: ArticleListItemProps) => {
    const { className, article, view, target, onClickItem, ...otherProps } = props;
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack align="center" gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );
    const title = <Text title={article.title} bold />;
    const image = (
        <AppImage
            src={article.img}
            alt={article.title}
            className={cls.img}
            fallback={
                <Skeleton
                    height={view === ArticleView.BIG ? '250px' : '200px'}
                    width={view === ArticleView.BIG ? '100%' : '200px'}
                />
            }
        />
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <Card
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                padding="24"
                {...otherProps}
            >
                <VStack gap="16" max>
                    <HStack max gap="8">
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username}  />
                        <Text text={article.createdAt} />
                    </HStack>
                    {title}
                    <Text title={article.subtitle} size="s" />
                    {image}
                    {textBlock.paragraphs &&
                        <Text text={textBlock.paragraphs[0]}
                            className={cls.textBlock} />
                    }
                    <HStack max justify="between">
                        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                            <Button variant='outline' onClick={onClickItem}>
                                {`${t('Читать далее')}...`}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink to={getRouteArticleDetails(article.id)} className={cls.link} target={target}>
                <Card className={cls.card} onClick={onClickItem} {...otherProps}>
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
}