import {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendtions/fetchArticleRecommendations';
import {
    articleDetailsRecommendationsReducer, getArticleRecommendations,
} from '../../model/slices/ArticleDetailsRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};
const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const navigate = useNavigate();

    const onSendCommentArticle = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToArticlesList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
            dispatch(fetchArticleRecommendations());
        }
    });

    if (!id) {
        return (
            <div className={
                classNames(cls.ArticlesDetailsPage, {}, [className])
            }
            >
                <div>{t('Статья не найдена')}</div>

            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={
                classNames(cls.ArticlesDetailsPage, {}, [className])
            }
            >
                <Button onClick={onBackToArticlesList}>
                    {t('Назад к списку статей')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Рекоммендации')} />
                <ArticleList articles={recommendations} isLoading={recommendationsIsLoading} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendCommentArticle} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
