import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">
interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
interface ClickableIcon extends IconBaseProps{
    clickable: true;
    onClick: () => void;
}
interface NonClickableIcon extends IconBaseProps {
    clickable: false;
}
type IconProps = ClickableIcon | NonClickableIcon;
export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [
                className,
            ])}
            width={width}
            height={height}
            {...otherProps}
        />
    );

    if(clickable){
        const {onClick} = props
        return (
            <button
            className={cls.button}
            type='button'
            onClick={onClick}
        >
            {icon}
        </button>)
    }
    return (
        <Svg
            className={classNames(cls.Icon, {}, [
                className,
            ])}
            width={width}
            height={height}
            {...otherProps}
        />
    );
};
