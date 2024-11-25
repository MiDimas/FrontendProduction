import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import cls from './Navbar.module.scss';

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
    

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text title={t('MiDi App')} theme={TextTheme.INVERTED} className={cls.appName} />
                <HStack align="center" justify="between" max>
                    <AppLink
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.INVERTED}
                        className={cls.createLink}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack gap="16" align="center">
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </HStack>
            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text title={t('MiDi App')} theme={TextTheme.INVERTED} className={cls.appName} />
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={openHandler}>
                {t('Войти')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={closeHandler} />}
        </header>
    );
});
