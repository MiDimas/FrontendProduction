import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation();
    if (isLoading) {
        return (
            <VStack className={
                classNames('', {}, [className])
            }
            >
                <CommentCard
                    isLoading={isLoading}
                />
                <CommentCard
                    isLoading={isLoading}
                />
                <CommentCard
                    isLoading={isLoading}
                />
            </VStack>
        );
    }

    return (
        <VStack
            gap="8"
            max
            className={
                classNames('', {}, [className])
            }
        >
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </VStack>
    );
});
