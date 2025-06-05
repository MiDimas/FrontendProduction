import {useTranslation} from "react-i18next";
import {ArticleListItemProps} from '../ArticleListItem';
import {Text} from "@/shared/ui/redesigned/Text";
import cls from './ArticleListItemRedesigned.module.scss';
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

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text text={article.user.username}  bold/>
        </>
    )

    // const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack align="center" gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );
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
    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    if (view === ArticleView.BIG) {
        return (
            <Card
                className={classNames(cls.ArticleListItemRedesigned, {}, [className, cls[view]])}
                padding="24"
                {...otherProps}
            >
                <VStack gap="16" max>
                    <HStack max gap="8">
                        {userInfo}
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" />
                    {image}
                    {textBlock.paragraphs &&
                        <Text text={textBlock.paragraphs[0]}
                            className={cls.textBlock} />
                    }
                    <HStack max justify="between">
                        <AppLink to={getRouteArticleDetails(article.id)} className={cls.link} target={target}>
                            <Button variant='outline'>
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
        <AppLink
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItemRedesigned, {}, [className, cls[view], cls.link])} target={target}
        >
            <Card className={cls.card} {...otherProps} padding="0">
                {image}
                <VStack className={cls.info} gap="4">
                    <Text text={article.title} bold />
                    {textBlock.paragraphs &&
                        <Text text={textBlock.paragraphs[0]}
                              className={cls.textBlock} size="s"/>
                    }
                    <VStack gap='4' className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text text={article.createdAt} className={cls.date} />
                            {views}
                        </HStack>
                        <HStack>{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>

    );
}