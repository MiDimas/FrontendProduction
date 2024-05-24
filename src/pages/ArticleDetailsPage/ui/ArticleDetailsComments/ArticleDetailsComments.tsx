import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsComments.module.scss';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation('article');
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    const onSendCommentArticle = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack className={classNames(cls.commentBlock, {}, [className])} max>
            <Text title={t('Комментарии')} />
            <AddCommentForm onSendComment={onSendCommentArticle} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
