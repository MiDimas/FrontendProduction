import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingParams {
    articleId: string;
    userId: string;
}

interface RateArticleParams {
    articleId: string;
    userId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRating: builder.query<Rating[], GetArticleRatingParams>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        rateArticle: builder.mutation<void, RateArticleParams>({
            query: ({ articleId, userId, rate, feedback }) => ({
                url: '/article-ratings',
                method: 'POST',
                body: {
                    articleId,
                    userId,
                    rate,
                    feedback,
                },
            }),
        }),
    }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
