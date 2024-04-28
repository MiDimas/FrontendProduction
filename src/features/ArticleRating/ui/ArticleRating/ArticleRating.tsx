import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';

interface ArticleRatingProps {
    className?:string;
}
export const ArticleRating = (props: ArticleRatingProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedBackTitle={t('Оставьте отзыв о статье')}
        />
    );
};
