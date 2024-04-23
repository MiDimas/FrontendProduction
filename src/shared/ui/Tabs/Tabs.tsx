import { ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}
export interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: string;
    onTabClick: (tab: TabItem<T>) => void;

}
export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className, tabs, value, onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem<T>) => () => {
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
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
