import React from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkStyleVariant = 'primary' | 'red';


export interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkStyleVariant;
    activeClassName?: string;
}

export const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
    const { className,
        children,
        to, variant='primary',
        activeClassName = '',
        ...otherProps } = props;
    return (
        <NavLink
            to={to}
            className={({isActive})=> classNames(cls.AppLink, {[activeClassName]: isActive}, [className, cls[variant]])}
            {...otherProps}
            ref={ref}
        >
            {children}
        </NavLink>
    );
});
