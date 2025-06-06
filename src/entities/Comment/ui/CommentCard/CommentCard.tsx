import { memo } from 'react';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <HStack align="center">
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton className={cls.text} height={40} width="100%" />
            </div>
        );
    }
    if (comment) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [className])}
                data-testid="CommentCard.Content"
            >
                <AppLink to={getRouteProfile(comment.user.id)}>
                    <HStack>
                        {comment.user.avatar ? (
                            <Avatar size={30} src={comment.user.avatar} />
                        ) : null}
                        <Text title={comment.user.username} />
                    </HStack>
                </AppLink>
                <Text className={cls.text} text={comment.text} />
            </div>
        );
    }
    return null;
});
