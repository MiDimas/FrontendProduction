import { Link, LinkProps } from 'react-router-dom';
import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

export interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(
                cls.AppLink,
                {},
                [className, cls[theme]],
            )}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Link>
    );
});
