import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown, Popover } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import { isUserManager } from 'entities/User/model/selectors/roles/rolesSelectors';
import NotificationIcon from 'shared/assets/icons/notification_icon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
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
                        to={RoutePath.article_create}
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
