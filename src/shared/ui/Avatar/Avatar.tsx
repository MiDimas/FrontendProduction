import { CSSProperties, useMemo } from 'react';
import User from '@/shared/assets/icons/user_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    inverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt = 'avatar', inverted } = props;

    const style = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );
    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={style}
            fallback={
                <Skeleton
                    height={size}
                    width={size}
                    border="50%"
                    className={classNames(cls.Avatar, {}, [className])}
                />
            }
            errorFallback={
                <Icon
                    Svg={User}
                    height={size}
                    width={size}
                    invertedColor={inverted}
                    className={classNames(cls.Avatar, {}, [className])}
                />
            }
        />
    );
};
