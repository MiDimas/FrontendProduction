import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    return (
        <div
            className={
                classNames(cls.Card, {}, [className])
            }
            {...otherProps}
        >
            {children}
        </div>
    );
};
