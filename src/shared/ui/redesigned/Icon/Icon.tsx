import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconFilling {
    FILL = 'fill',
    STROKE = 'stroke',
    BOTH = 'both',
}
interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    colorFilling?: IconFilling;
    invertedColor?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки @redesigned
 * @deprecated
 *
 */
export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        colorFilling = IconFilling.FILL,
        invertedColor,
        width = 24,
        height = 24,
        ...otherProps
    } = props;
    return (
        <Svg
            className={classNames(cls.Icon, { [cls.inverted]: invertedColor }, [
                cls[colorFilling],
                className,
            ])}
            width={width}
            height={height}
            {...otherProps}
        />
    );
};
