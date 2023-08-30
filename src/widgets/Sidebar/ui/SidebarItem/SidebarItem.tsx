import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}
export const SidebarItem: FC<SidebarItemProps> = (props) => {
    const {
        item,
        collapsed = false,
    } = props;
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
            <Icon className={cls.icon} />
            <span className={cls.link}>{text}</span>
        </AppLink>
    );
};
