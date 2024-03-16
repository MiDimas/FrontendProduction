import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { data, isLoading } = useArticleRecommendationsList(3);
    return (
        <VStack
            gap="8"
            className={
                classNames(cls.ArticleRecommendationsList, {}, [className])
            }
        >
            <Text title={t('Рекомендации')} />
            <ArticleList
                articles={data || []}
                className={cls.recommendations}
                isLoading={isLoading}
                recommend
                target="_blank"
            />
        </VStack>
    );
});
