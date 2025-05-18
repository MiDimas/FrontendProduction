import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './Tabs.module.scss';
import {Flex} from "@/shared/ui/redesigned/Stack";
import {FlexDirection} from "@/shared/ui/redesigned/Stack/Flex/Flex";

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}
export interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: string;
    onTabClick: (tab: TabItem<T>) => void;
    direction?: FlexDirection;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick, direction } = props;

    const clickHandle = useCallback(
        (tab: TabItem<T>) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <Flex className={classNames(cls.Tabs, {}, [className])}
            direction={direction}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return <Card
                    className={classNames(cls.tabCard, {[cls.selected]: isSelected}, [])}
                    variant={isSelected ? 'light' : 'normal'}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    borderForm="round"

                >
                    {tab.content}
                </Card>
            })}
        </Flex>
    );
};
