import {ButtonHTMLAttributes, memo, ReactElement} from 'react';
import { Additional, classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = 'outline',
        children,
        square,
        size = 'm',
        disabled = false,
        fullWidth,
        addonRight,
        addonLeft,
        color = 'normal',
        ...otherProps
    } = props;
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullwidth]: fullWidth,
        [cls.withAddon]: Boolean(addonRight) || Boolean(addonLeft)
    };
    const additional: Additional = [className, cls[variant], cls[size], cls[color]];
    return (
        <button
            data-testid="ui-btn"
            type="button"
            className={classNames(cls.Button, mods, additional)}
            disabled={disabled}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
