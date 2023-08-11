import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
}

export const Text:FC<TextProps> = ({ className, title, text }) => (
    <div className={classNames(cls.Text, {}, [])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
);
