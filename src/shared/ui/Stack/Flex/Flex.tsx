import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'stretch';
export type FlexAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'stretch',
        direction = 'row',
    } = props;
    return (
        <div className={
            classNames(cls.Flex, {}, [className])
        }
        >
            {children}
        </div>
    );
};
