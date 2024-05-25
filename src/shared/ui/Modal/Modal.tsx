import {
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal';
import { HStack } from '@/shared/ui/Stack';
import { Overlay } from '@/shared/ui/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    noPortal?: boolean;
    lazy?: boolean;
}

export const Modal = (props : ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        noPortal,
        lazy = false,
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

    const mods: Mods = {
        [cls.opened]: isOpen && !isOpening,
        [cls.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    if (noPortal) {
        return (
            <HStack
                justify="center"
                align="center"
                max
                height="100%"
                className={classNames(cls.Modal, mods, [className])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </HStack>
        );
    }
    return (
        <Portal>
            <HStack
                justify="center"
                align="center"
                max
                height="100%"
                className={classNames(cls.Modal, mods)}
            >
                <Overlay onClick={close} />
                <div
                    className={classNames(cls.content, {}, [className])}
                >
                    {children}
                </div>
            </HStack>
        </Portal>
    );
};
