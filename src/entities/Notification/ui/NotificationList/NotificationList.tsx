import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data } = useNotifications(null);

    return (
        <VStack
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data && (
                data.map((item) => (
                    <NotificationItem item={item} key={item.id} />
                ))
            )}
        </VStack>
    );
});
