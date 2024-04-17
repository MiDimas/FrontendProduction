import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?:ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const mods:Mods = {
        [cls.opened]: isOpen,
    };
    return (
        <Portal>
            <div className={
                classNames(cls.Drawer, mods, [className])
            }
            >
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
});
