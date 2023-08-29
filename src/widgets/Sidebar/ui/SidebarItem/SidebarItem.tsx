import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
}
export const SidebarItem: FC<SidebarItemProps> = (props) => {
    const { item } = props;
    const {
        Icon,
        text,
        path,
    } = item;
    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={path}
            className={cls.SidebarItem}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>{text}</span>
        </AppLink>
    );
};
