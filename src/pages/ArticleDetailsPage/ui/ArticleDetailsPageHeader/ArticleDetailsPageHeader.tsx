import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const onBackToArticlesList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);
    return (
        <div className={
            classNames(cls.ArticleDetailsPageHeader, {}, [className])
        }
        >
            <Button onClick={onBackToArticlesList}>
                {t('Назад к списку статей')}
            </Button>
            { canEdit
                && (
                    <Button className={cls.editBtn}>
                        {t('Редактировать')}
                    </Button>
                )}
        </div>
    );
});
