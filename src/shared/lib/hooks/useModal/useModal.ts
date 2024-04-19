import {
    useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    onClose?: ()=> void;
    isOpen?: boolean;
    animationDelay?: number;
}
export function useModal(props: UseModalProps) {
    const {
        onClose,
        isOpen,
        animationDelay = 300,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timer = useRef<NodeJS.Timeout>();
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, setIsClosing, animationDelay]);

    const escapeClose = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', escapeClose);
        }
        return () => {
            window.removeEventListener('keydown', escapeClose);
        };
    }, [isOpen, escapeClose]);

    useEffect(() => {
        if (isOpen) {
            setIsOpening(true);
            timer.current = setTimeout(() => {
                setIsOpening(false);
            }, 50);
        }
    }, [isOpen]);

    return {
        isClosing,
        isOpening,
        isMounted,
        close,
    };
}
