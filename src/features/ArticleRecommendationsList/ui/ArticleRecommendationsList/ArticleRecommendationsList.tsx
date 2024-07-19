import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { data, isLoading, error } = useArticleRecommendationsList(3);
    return (
        <VStack
            gap="8"
            className={classNames(cls.ArticleRecommendationsList, {}, [className])}
            data-testid="ArticleRecommendationsList"
        >
            <Text title={t('Рекомендации')} />
            <ArticleList
                articles={data || []}
                className={cls.recommendations}
                isLoading={isLoading}
                error={String(error)}
                target="_blank"
            />
        </VStack>
    );
});
