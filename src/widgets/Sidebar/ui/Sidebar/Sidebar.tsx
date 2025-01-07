import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
// import { BugButton } from 'app/providers/ErrorBoundary';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Flex, VStack } from '@/shared/ui/deprecated/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";
import AppLogo from "@/shared/ui/redesigned/AppLogo/AppLogo";
import {Icon} from "@/shared/ui/redesigned/Icon";
import ArrowIcon from "@/shared/assets/icons/Arrow.svg"

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        console.log('click:', collapsed)
        setCollapsed((prevState) => !prevState);
    };
    const sidebarItemList = useSelector(getSidebarItems);
    return (
        <ToggleFeatures
            feature="isRedesigned"
        off={(<aside
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                {
                    [cls.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <Button
                data-testid="toggle-sidebar"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" gap="16" className={cls.items}>
                {sidebarItemList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </VStack>
            {/* <BugButton /> */}
            <Flex
                justify={collapsed ? 'center' : 'end'}
                direction={collapsed ? 'column' : 'row'}
                max
                gap={collapsed ? '4' : '32'}
                className={cls.switcher}
            >
                <LangSwitcher className={cls.lang} short={collapsed} />
                <ThemeSwitcher />
            </Flex>
        </aside>)}
            on={(
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        {
                            [cls.collapsedRedesigned]: collapsed,
                        },
                        [className],
                    )}
                >
                    <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50 }/>
                    <VStack role="navigation" gap="8" className={cls.items}>
                        {sidebarItemList.map((item) => (
                            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                        ))}
                    </VStack>
                    <Icon
                        data-testid="toggle-sidebar"
                        type="button"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        clickable
                        Svg={ArrowIcon}
                        offBtnSize
                    />
                    <Flex
                        justify="center"
                        align="center"
                        direction={collapsed ? 'column' : 'row'}
                        max
                        gap={collapsed ? '4' : '16'}
                        className={cls.switcher}
                    >
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} short={collapsed} />
                    </Flex>
                </aside>
            )}
            />
    );
});
