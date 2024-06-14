import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Icon } from '@/shared/ui/Icon';
import User from '@/shared/assets/icons/user_icon.svg';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    inverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt = 'avatar',
        inverted,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={style}
            fallback={<Skeleton height={size} width={size} border="50%" />}
            errorFallback={<Icon Svg={User} height={size} width={size} invertedColor={inverted} />}
        />
    );
};
