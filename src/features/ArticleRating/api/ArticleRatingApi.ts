import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRating: builder.query<Rating[], {articleId: string, userId: string}>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
    }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
