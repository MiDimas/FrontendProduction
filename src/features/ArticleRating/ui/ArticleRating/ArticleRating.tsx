import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?:string;
    articleId?: string;
}
const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId = '' } = props;
    const { t } = useTranslation();
    const user = useSelector(getUserAuthData);
    const { data, isLoading } = useArticleRating({ articleId, userId: user?.id || '' });
    const [rateArticle] = useRateArticle();

    const handleRateArticle = useCallback((starsCount:number, feedback?:string) => {
        try {
            rateArticle({
                articleId,
                userId: user?.id ?? '',
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, user, rateArticle]);

    const onAccept = useCallback((starsCount:number, feedback?:string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    const onCancel = useCallback((starsCount:number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

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
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});
export default ArticleRating;
