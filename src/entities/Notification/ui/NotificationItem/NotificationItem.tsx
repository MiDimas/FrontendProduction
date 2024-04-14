import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={
            classNames(cls.NotificationItem, {}, [className])
        }
        >
            {t('Уведомления')}
        </div>
    );
});
