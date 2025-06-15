import { memo } from 'react';
import {HStack, VStack} from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar  as AvatarDeprecated} from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import {ToggleFeatures, toggleFeatures} from "@/shared/lib/features";
import {Card} from "@/shared/ui/redesigned/Card";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: "isRedesigned",
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated
    })
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
            
            <ToggleFeatures feature="isRedesigned"
                off={
                    <div
                        className={classNames(cls.CommentCard, {}, [className])}
                        data-testid="CommentCard.Content"
                    >
                        <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
                            <HStack>
                                {comment.user.avatar ? (
                                    <AvatarDeprecated size={30} src={comment.user.avatar}/>
                                ) : null}
                                <TextDeprecated title={comment.user.username}/>
                            </HStack>
                        </AppLinkDeprecated>
                        <TextDeprecated className={cls.text} text={comment.text}/>
                    </div>
                }
                on={
                    <Card
                        className={className}
                        data-testid="CommentCard.Content"
                        padding="24"
                        borderForm="round"
                        fullWidth
                    >
                        <VStack gap="8">
                            <AppLink to={getRouteProfile(comment.user.id)}>
                                <HStack>
                                    {comment.user.avatar ? (
                                        <Avatar size={30} src={comment.user.avatar}/>
                                    ) : null}
                                    <Text text={comment.user.username} bold/>
                                </HStack>
                            </AppLink>
                            <Text text={comment.text}/>
                        </VStack>

                    </Card>
                }
            />
        );
    }
    return null;
});
