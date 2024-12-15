import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        ...otherProps
    } = props;
    return (
        <Svg
            className={classNames(cls.Icon, {}, [
                className,
            ])}
            width={width}
            height={height}
            {...otherProps}
        />
    );
};
