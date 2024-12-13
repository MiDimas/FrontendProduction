import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkStyleVariant = 'primary' | 'red';


export interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkStyleVariant;
}

export const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
    const { className, children, to, variant='primary', ...otherProps } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[variant]])}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Link>
    );
});
