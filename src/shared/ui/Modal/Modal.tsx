import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, MouseEvent, useEffect } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props : ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };
    const stopProp = (e: MouseEvent) => {
        e.stopPropagation();
    };
    const escapeClose = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    };
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', escapeClose);
        }
        return () => {
            window.removeEventListener('keydown', escapeClose);
        };
    }, [isOpen]);
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div onClick={closeHandler} className={cls.overlay}>
                <div onClick={stopProp} className={cls.content}>{children}</div>
            </div>
        </div>
    );
};
