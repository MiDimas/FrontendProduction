import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const {
        item,
        collapsed = false,
    } = props;
    if (item.authOnly && !isAuth) {
        return null;
    }
    const {
        Icon,
        text,
        path,
    } = item;
    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })}
        >
            <HStack
                gap="8"
                align="center"
                justify="start"
                className={cls.block}
                max
            >
                <Icon className={cls.icon} />
                <span className={cls.link}>{t(text)}</span>
            </HStack>
        </AppLink>
    );
});
