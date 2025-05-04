import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
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
    const article = useSelector(getArticleDetailsData);
    const onBackToArticlesList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);
    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [navigate, article]);

    return (
        <HStack align="center" className={classNames('', {}, [className])}>
            <Button onClick={onBackToArticlesList}>{t('Назад к списку статей')}</Button>
            {canEdit && (
                <Button className={cls.editBtn} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});
