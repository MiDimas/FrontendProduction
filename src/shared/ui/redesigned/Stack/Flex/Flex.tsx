import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
export type FlexAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type FlexDirection = 'row' | 'column' | 'rowReverse' | 'columnReverse';
export type FlexGap = '0' | '4' | '8' | '16' | '24' | '32' | '64';
export interface FlexProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    width?: string | number;
    height?: string | number;
    max?: boolean;
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
    0: '',
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
    64: cls.gap64,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'stretch',
        direction = 'row',
        gap = 8,
        width,
        height,
        max,
        ...other
    } = props;
    const styles: CSSProperties = {
        width: max ? '100%' : width,
        height,
    };

    const additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        directionClasses[direction],
        gapClasses[gap],
    ];

    return (
        <div className={classNames(cls.Flex, {}, additional)} style={styles} {...other}>
            {children}
        </div>
    );
};
