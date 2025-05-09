import { HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outline';
export type PaddingVariant = '0' | '8' | '16' | '24';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: CardVariant;
    padding?: PaddingVariant;
}

const mapPaddingToClasses: Record<PaddingVariant, string> = {
    '0': 'pad_0',
    '8': 'pad_8',
    '16': 'pad_16',
    '24': 'pad_24',
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        padding = '8',
        ...otherProps } = props;
    const mods = {}
    const additional = [className, cls[variant], mapPaddingToClasses[padding]]
    return (
        <div className={classNames(cls.Card, mods, additional)} {...otherProps}>
            {children}
        </div>
    );
};
