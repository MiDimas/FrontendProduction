import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { data } = useNotifications(null);
    console.log(data);
    return (
        <div className={
            classNames(cls.NotificationList, {}, [className])
        }
        >
            {t('Уведомления')}
        </div>
    );
});
