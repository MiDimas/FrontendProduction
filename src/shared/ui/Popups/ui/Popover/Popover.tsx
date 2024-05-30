import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { ListBoxOptionsDirection } from '@/shared/types';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClasses } from '../../styles/consts';
import popup from '../../styles/popups.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: ListBoxOptionsDirection;
    children?: ReactNode;
}
export function Popover(props:PopoverProps) {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children,
    } = props;

    const menuClasses = [mapDirectionClasses[direction]];

    return (
        <HPopover className={classNames(cls.popover, {}, [className, popup.popup])}>
            <HPopover.Button className={popup.trigger} as="div">{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
