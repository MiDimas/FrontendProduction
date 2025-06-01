import { memo } from 'react';
import { Additional, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';


export type TextVariant = 'primary' | 'error' | 'accent';
export type TextAlign  = 'right' | 'left' | 'center';
export type TextSize = 's'|'m'|'l'
export type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};
const mapSizeToClass: Record<TextSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        'data-testid': dataTestId = '',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeToClass = mapSizeToClass[size];

    const additional: Additional = [className, cls[variant], cls[align], sizeToClass];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && (
                <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
