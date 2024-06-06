import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [isOpen, setIsOpen] = useState(false);

    const closeHandler = useCallback(() => {
        setIsOpen(false);
    }, []);
    const openHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    const lorem = `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit. Nisi, voluptatum.`;

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    title={t('MiDi App')}
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                />
                <HStack
                    align="center"
                    justify="between"
                    max
                >
                    <AppLink
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.INVERTED}
                        className={cls.createLink}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack
                        gap="16"
                        align="center"
                    >
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>

                </HStack>

            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                title={t('MiDi App')}
                theme={TextTheme.INVERTED}
                className={cls.appName}
            />
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={openHandler}>
                {t('Войти')}
            </Button>
            {isOpen
                && <LoginModal isOpen={isOpen} onClose={closeHandler} />}

        </header>
    );
});
