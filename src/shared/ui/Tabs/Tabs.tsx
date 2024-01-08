import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { classNames } from 'shared/lib/classNames/classNames';
import { Simulate } from 'react-dom/test-utils';
import cls from './Tabs.module.scss';
import input = Simulate.input;

export interface TabItem {
    value: string;
    content: ReactNode;
}
export interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;

}
export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cls.tabCard}
                    theme={tab.value === value
                        ? CardTheme.NORMAL
                        : CardTheme.OUTLINE}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.value}
                </Card>
            ))}
        </div>
    );
});
