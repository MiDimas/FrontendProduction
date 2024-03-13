import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <VStack
            gap="8"
            className={
                classNames('', {}, [className])
            }
        >
            <Text className={cls.commentTitle} title={t('Рекомендации')} />
            <ArticleList
                articles={[]}
                className={cls.recommendations}
                recommend
                target="_blank"
            />
        </VStack>
    );
});
