import { HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

/**
 * Устарел, используем новые компоненты из папки @redesigned
 * @deprecated
 *
 */
export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardTheme;
}

/**
 * Устарел, используем новые компоненты из папки @redesigned
 * @deprecated
 *
 */
export const Card = (props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;
    return (
        <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    );
};
