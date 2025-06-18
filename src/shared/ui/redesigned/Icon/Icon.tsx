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
    offSize?: boolean;
}
interface NonClickableIcon extends IconBaseProps {
    clickable?: false;
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

    if(clickable){
        const {onClick, offSize=false,
            className,
            Svg,
            width = 32,
            height = 32,
            clickable, ...other } = props
        return (
            <button
            className={classNames(cls.button, {}, [className])}
            type='button'
            onClick={onClick}
            style={offSize ? {} : {width, height}}
        >
            <Svg
                className={classNames(cls.Icon, {}, [
                    clickable ? undefined : className,
                ])}
                width={width}
                height={height}
                {...other}
            />
        </button>)
    }
    return <Svg
        className={classNames(cls.Icon, {}, [
            clickable ? undefined : className,
        ])}
        width={width}
        height={height}
        {...otherProps}
    />;
};
