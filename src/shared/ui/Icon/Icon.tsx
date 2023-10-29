import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Icon.module.scss';

export enum IconFilling {
    FILL = 'fill',
    STROKE = 'stroke'
}
interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    colorFilling?: IconFilling;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        colorFilling = IconFilling.FILL,
    } = props;
    return (
        <Svg className={
            classNames(cls.Icon, {}, [cls[colorFilling], className])
        }
        />
    );
};
