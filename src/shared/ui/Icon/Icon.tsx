import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconFilling {
    FILL = 'fill',
    STROKE = 'stroke',
    BOTH = 'both'
}
interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    colorFilling?: IconFilling;
    invertedColor?: boolean;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        colorFilling = IconFilling.FILL,
        invertedColor,
        ...otherProps
    } = props;
    return (
        <Svg
            className={
                classNames(cls.Icon, { [cls.inverted]: invertedColor }, [cls[colorFilling], className])
            }
            {...otherProps}
        />
    );
};
