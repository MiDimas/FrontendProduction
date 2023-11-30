import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye_icon.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    const title = <Text text={article.title} className={cls.title} />;
    const image = <img src={article.img} alt={article.title} className={cls.img} />;

    const onClickArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article.id]);

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
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.user} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    {title}
                    {types}
                    {image}
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onClickArticle}>
                            {`${t('Читать далее')}...`}
                        </Button>
                        {views}
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
            <Card className={cls.card} onClick={onClickArticle}>
                <div className={cls.imageWrapper}>
                    {image}
                    <Text text={article.createdAt} className={cls.date} />
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
