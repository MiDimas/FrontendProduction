import { memo, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { LoginForm } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginForm onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
});
