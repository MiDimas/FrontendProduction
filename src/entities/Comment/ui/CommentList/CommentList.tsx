import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import {ToggleFeatures} from "@/shared/lib/features";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();
    if (isLoading) {
        return (
            <VStack className={classNames('', {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </VStack>
        );
    }

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard comment={comment} key={comment.id} isLoading={isLoading} />
                ))
            ) : (
                <ToggleFeatures feature="isRedesigned"
                    off={
                        <TextDeprecated text={t('Комментарии отсутствуют')} />
                    }
                    on={
                        <Text text={t('Комментарии отсутствуют')} />
                    }
                />
            )}
        </VStack>
    );
});
