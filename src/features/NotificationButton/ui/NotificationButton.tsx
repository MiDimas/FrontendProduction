import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification_icon.svg';
import { NotificationList } from 'entities/Notification';
import { Dropdown, Popover } from 'shared/ui/Popups';
import { HStack } from 'shared/ui/Stack';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [open, setOpen] = useState(false);
    return (
        <HStack>
            <Popover
                direction="bottom left"
                trigger={<Icon Svg={NotificationIcon} invertedColor />}
                className={classNames('', {}, [className])}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
            <button type="button" onClick={() => setOpen(true)}>
                <Icon Svg={NotificationIcon} invertedColor />
            </button>
            <Drawer isOpen={open} onClose={() => setOpen(false)}>
                <NotificationList className={cls.notificationMobile} />
            </Drawer>
        </HStack>

    );
});
