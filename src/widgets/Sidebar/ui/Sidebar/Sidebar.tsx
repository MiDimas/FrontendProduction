import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
// import { BugButton } from 'app/providers/ErrorBoundary';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };
    const sidebarItemList = useSelector(getSidebarItems);
    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
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
                { collapsed ? '>' : '<' }
            </Button>
            <div className={cls.items}>
                {
                    sidebarItemList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))
                }

            </div>
            {/* <BugButton /> */}
            <div className={cls.switcher}>
                <LangSwitcher className={cls.lang} short={collapsed} />
                <ThemeSwitcher />
            </div>
        </menu>
    );
});
