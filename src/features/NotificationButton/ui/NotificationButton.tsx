import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification_icon.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [open, setOpen] = useState(false);
    const onCloseDrawer = useCallback(
        () => { setOpen(false); },
        [setOpen],
    );
    const onOpenDrawer = useCallback(
        () => { setOpen(true); },
        [setOpen],
    );
    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} invertedColor />
        </Button>
    );
    return (
        <div>
            <BrowserView>
                <Popover
                    direction="bottom left"
                    trigger={trigger}
                    className={classNames('', {}, [className])}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={open} onClose={onCloseDrawer} lazy>
                    <NotificationList className={cls.notificationMobile} />
                </Drawer>
            </MobileView>
        </div>

    );
});
