import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating } from '@/features/ArticleRating/api/ArticleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingProps {
    className?:string;
    articleId?: string;
}
export const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId = '' } = props;
    const { t } = useTranslation();
    const user = useSelector(getUserAuthData);
    const { data, isLoading } = useArticleRating({ articleId, userId: user?.id || '' });
    if (isLoading) {
        return <Skeleton width="100%" height="120px" border="10px" />;
    }
    const rating = data?.[0];
    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedBackTitle={t('Оставьте отзыв о статье')}
            rate={rating?.rate}
            hasFeedback
        />
    );
};
