import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed = false,
    } = props;
    const {
        Icon,
        text,
        path,
    } = item;
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>{t(text)}</span>
        </AppLink>
    );
});
