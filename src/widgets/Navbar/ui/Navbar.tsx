import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const closeHandler = useCallback(() => {
        setIsOpen(false);
    }, []);
    const openHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    const lorem = `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit. Nisi, voluptatum.`;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {/* <Button theme={ButtonTheme.BACKGROUND} className={cls.inks} onClick={openHandler}> */}
            {/*    {t('Войти')} */}
            {/* </Button> */}
            {/* <Modal isOpen={isOpen} onClose={closeHandler}> */}
            {/*    {lorem} */}
            {/* </Modal> */}

        </div>
    );
};
