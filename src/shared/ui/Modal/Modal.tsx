import { classNames } from 'shared/lib/classNames/classNames';
import {
    ReactNode, MouseEvent, useEffect, useCallback, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
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

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    const stopProp = (e: MouseEvent) => {
        e.stopPropagation();
    };
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
            <div className={classNames(cls.Modal, mods, [className])}>
                <div onClick={closeHandler} className={cls.overlay}>
                    <div onClick={stopProp} className={cls.content}>{children}</div>
                </div>
            </div>
        );
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods)}>
                <div onClick={closeHandler} className={cls.overlay}>
                    <div
                        onClick={stopProp}
                        className={classNames(cls.content, {}, [className])}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
