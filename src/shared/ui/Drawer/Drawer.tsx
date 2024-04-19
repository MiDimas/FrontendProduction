import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { lazy, memo, ReactNode } from 'react';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Portal } from 'shared/ui/Portal/Portal';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?:ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const {
        isClosing,
        isOpening,
        isMounted,
        close,
    } = useModal({
        onClose,
        isOpen,
    });
    const mods:Mods = {
        [cls.opened]: isOpen && !isOpening,
        [cls.closing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={
                classNames(cls.Drawer, mods, [className])
            }
            >
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
});
