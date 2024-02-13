import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
export type FlexAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type FlexDirection = 'row' | 'column' | 'rowReverse' | 'columnReverse';
export type FlexGap = 4 | 8 | 16 | 32;
interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?:FlexGap;
}
const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    around: cls.justifyAround,
    stretch: cls.justifyStretch,
};
const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
    baseline: cls.alignBaseline,
    stretch: cls.alignStretch,
};
const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
    rowReverse: cls.directionRowReverse,
    columnReverse: cls.directionColumnReverse,
};
const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'stretch',
        direction = 'row',
        gap = 4,
    } = props;

    const additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        directionClasses[direction],
        gapClasses[gap],
    ];

    return (
        <div className={
            classNames(cls.Flex, {}, additional)
        }
        >
            {children}
        </div>
    );
};
