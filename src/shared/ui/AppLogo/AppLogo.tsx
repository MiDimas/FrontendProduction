import React from 'react';
import {HStack} from "@/shared/ui/Stack";
import AppAvatar from "@/shared/assets/icons/site_avatar_icon.svg";
import cls from "./AppLogo.module.scss";
import {classNames} from "@/shared/lib/classNames/classNames";

interface AppLogoProps{
    className?: string;
}
const AppLogo = ({className}: AppLogoProps) => (
        <HStack
            max
            justify='center'
            className={classNames(cls.AppLogoWraper, {}, [className])}
        >
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>
            <AppAvatar className={cls.appLogo}/>
        </HStack>
    );

export default AppLogo;