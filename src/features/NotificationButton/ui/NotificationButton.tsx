import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification_icon.svg';
import NotificationIcon from '@/shared/assets/icons/Notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import cls from './NotificationButton.module.scss';
import {Icon} from '@/shared/ui/redesigned/Icon';
import {Popover} from '@/shared/ui/redesigned/Popups';

import {ToggleFeatures} from "@/shared/lib/features";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [open, setOpen] = useState(false);
    const onCloseDrawer = useCallback(() => {
        setOpen(false);
    }, [setOpen]);
    const onOpenDrawer = useCallback(() => {
        setOpen(true);
    }, [setOpen]);
    const trigger = (
        <ToggleFeatures feature='isRedesigned'
        on={
           <Icon Svg={NotificationIcon} onClick={onOpenDrawer} clickable/>
        }
        off={
            <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                <IconDeprecated Svg={NotificationIconDeprecated} invertedColor />
            </ButtonDeprecated>
        } />
    );
    return (
        <div>
            <BrowserView>
                <ToggleFeatures feature='isRedesigned'
                    on={
                        <Popover
                            direction="bottom left"
                            trigger={trigger}
                            className={classNames('', {}, [className])}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            direction="bottom left"
                            trigger={trigger}
                            className={classNames('', {}, [className])}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
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
