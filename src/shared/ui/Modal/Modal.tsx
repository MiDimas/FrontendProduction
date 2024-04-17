import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ReactNode, MouseEvent, useEffect, useCallback, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { HStack } from 'shared/ui/Stack';
import { Overlay } from 'shared/ui/Overlay/Overlay';
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
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const escapeClose = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', escapeClose);
        }
        return () => {
            window.removeEventListener('keydown', escapeClose);
        };
    }, [isOpen, escapeClose]);

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
                <Overlay onClick={closeHandler} />
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
                <Overlay onClick={closeHandler} />
                <div
                    className={classNames(cls.content, {}, [className])}
                >
                    {children}
                </div>
            </HStack>
        </Portal>
    );
};
