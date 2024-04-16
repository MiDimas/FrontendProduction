import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification_icon.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            direction="bottom left"
            trigger={<Icon Svg={NotificationIcon} invertedColor />}
            className={classNames('', {}, [className])}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
