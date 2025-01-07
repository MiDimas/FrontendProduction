import {memo, useCallback} from 'react';
import ThemeIconDeprecated from '@/shared/assets/icons/themeIcon.svg';
import ThemeIcon from '@/shared/assets/icons/Theme.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {saveJsonSettings} from "@/entities/User";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage";
import {Icon as IconDeprecated} from "@/shared/ui/deprecated/Icon";
import {Icon} from "@/shared/ui/redesigned/Icon"
import {ToggleFeatures} from "@/shared/lib/features";

interface ThemeSwitcherProps {
    className?: string;
    startTheme?: Theme;
}

export const ThemeSwitcher = memo(({ className, startTheme }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const toggleThemeHandler = useCallback(() => {
        toggleTheme?.((theme) => {
                if (theme) {
                    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
                    dispatch(saveJsonSettings({theme}))
                }
            }
        )
    }, [toggleTheme, dispatch]);
    return (
        <ToggleFeatures feature="isRedesigned"
            on={
                <Icon Svg={ThemeIcon} clickable onClick={toggleThemeHandler}/>
            }
            off={
                <Button
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggleThemeHandler}
                >
                    <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} invertedColor/>
                </Button>
            }
        />

    );
});
