import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';
import {toggleFeatures, ToggleFeatures} from "@/shared/lib/features";

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
            className={classNames(toggleFeatures({
                name: "isRedesigned",
                on: () => cls.ArticleRecommendationsListRedesigned,
                off: () => cls.ArticleRecommendationsList
            }), {}, [className])}
            data-testid="ArticleRecommendationsList"
        >
            <ToggleFeatures
                feature="isRedesigned"
                off={
                    <TextDeprecated title={t('Рекомендации')} />

                }
                on={
                    <Text title={t('Рекомендации')} size="l" />
                }
            />
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
