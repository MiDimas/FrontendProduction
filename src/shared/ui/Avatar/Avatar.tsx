import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt = 'avatar',
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={style}
        />
    );
};
