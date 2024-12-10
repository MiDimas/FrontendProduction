import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton height="70px" width="100%" border="12px" />
                <Skeleton height="70px" width="100%" border="12px" />
                <Skeleton height="70px" width="100%" border="12px" />
            </VStack>
        );
    }
    return (
        <VStack className={classNames(cls.NotificationList, {}, [className])}>
            {data && data.map((item) => <NotificationItem item={item} key={item.id} />)}
        </VStack>
    );
});
