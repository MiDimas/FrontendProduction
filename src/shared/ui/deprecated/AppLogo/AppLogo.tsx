import React from 'react';
import {HStack} from "@/shared/ui/deprecated/Stack";
import AppAvatar from "@/shared/assets/icons/site_avatar_icon.svg";
import cls from "./AppLogo.module.scss";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Icon} from "@/shared/ui/deprecated/Icon";

interface AppLogoProps{
    className?: string;
}
/**
 * Устарел, используем новые компоненты из папки @redesigned
 * @deprecated
 *
 */
const AppLogo = ({className}: AppLogoProps) => (
        <HStack
            max
            justify='center'
            className={classNames(cls.AppLogoWraper, {}, [className])}
        >
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>
            <Icon Svg={AppAvatar} className={cls.appLogo} width={48} height={48}/>
        </HStack>
    );

export default AppLogo;