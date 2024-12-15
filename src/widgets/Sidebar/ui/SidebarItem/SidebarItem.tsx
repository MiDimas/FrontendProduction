import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";
import {AppLink} from "@/shared/ui/redesigned/AppLink";
import {Icon} from "@/shared/ui/redesigned/Icon";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const { item, collapsed = false } = props;
    if (item.authOnly && !isAuth) {
        return null;
    }
    const {text, path } = item;
    return (
        <ToggleFeatures
            feature="isRedesigned"
            on={
            <AppLink
                to={path}
                className={classNames(cls.SidebarItemRedesigned, {
                    [cls.collapsed]: collapsed,
                })}
            >
                <HStack gap="16" align="center" justify="start" className={cls.block}
                        max>
                    <Icon Svg={item.Icon} />
                    <span className={cls.link}>{t(text)}</span>
                </HStack>
            </AppLink>

        }
        off={
            <AppLinkDeprecated
                theme={AppLinkTheme.INVERTED}
                to={path}
                className={classNames(cls.SidebarItem, {
                    [cls.collapsed]: collapsed,
                })}
            >
                <HStack
                    gap="8"
                    align="center"
                    justify="start"
                    className={cls.block}
                    max>
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(text)}</span>
                </HStack>
            </AppLinkDeprecated>
        }
            />
    );
});
