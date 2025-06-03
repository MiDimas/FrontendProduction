import {useTranslation} from "react-i18next";
import {ArticleListItemProps} from '../ArticleListItem';
import {Text} from "@/shared/ui/deprecated/Text";
import cls from '../ArticleListItem.module.scss';
import {HStack} from "@/shared/ui/redesigned/Stack";
import {Icon} from "@/shared/ui/deprecated/Icon";
import EyeIcon from "@/shared/assets/icons/eye_icon.svg";
import {AppImage} from "@/shared/ui/redesigned/AppImage";
import {Skeleton} from "@/shared/ui/deprecated/Skeleton";
import {ArticleBlockType, ArticleView} from "../../../model/consts/articleConsts";
import {ArticleTextBlock} from '../../../model/types/article';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Card} from "@/shared/ui/deprecated/Card";
import {Avatar} from "@/shared/ui/deprecated/Avatar";
import {ArticleTextBlockComponent} from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {AppLink} from "@/shared/ui/deprecated/AppLink";
import {getRouteArticleDetails} from "@/shared/const/router";
import {Button, ButtonTheme} from "@/shared/ui/deprecated/Button";

export const ArticleListItemDeprecated = (props: ArticleListItemProps) => {
    const { className, article, view, target, onClickItem, ...otherProps } = props;
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack align="center" gap="8">
            <Text text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </HStack>
    );
    const title = <Text text={article.title} className={cls.title} />;
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
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card} {...otherProps}>
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
                        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
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