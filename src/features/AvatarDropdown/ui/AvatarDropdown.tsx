import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import cls from './AvatarDropdown.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanel = isAdmin || isManager;
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }
    const items = [
        ...(isAdminPanel
            ? [
                {
                    content: t('Админка'),
                    href: getRouteAdmin(),
                },
            ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ]
    return (
        <ToggleFeatures feature='isRedesigned'
            off={
                <DropdownDeprecated
                    items={items}
                    trigger={<AvatarDeprecated size={30} src={authData.avatar} inverted className={cls.avatar} />}
                    className={classNames(cls.dropdown, {}, [className])}
                    direction="bottom left"
                />
            }
            on={
                <Dropdown
                    items={items}
                    trigger={<Avatar size={30} src={authData.avatar} inverted className={cls.avatar} />}
                    className={classNames(cls.dropdown, {}, [className])}
                    direction="bottom left"
                />
            }
        />

    );
});
