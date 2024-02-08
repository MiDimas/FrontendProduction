import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

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
            <div className={
                classNames(cls.CommentList, {}, [className])
            }
            >
                <CommentCard
                    className={cls.comment}
                    isLoading={isLoading}
                />
                <CommentCard
                    className={cls.comment}
                    isLoading={isLoading}
                />
                <CommentCard
                    className={cls.comment}
                    isLoading={isLoading}
                />
            </div>
        );
    }

    return (
        <div className={
            classNames(cls.CommentList, {}, [className])
        }
        >
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        comment={comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
