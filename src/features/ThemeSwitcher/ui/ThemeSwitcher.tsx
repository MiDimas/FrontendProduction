import {memo, useCallback} from 'react';
import ThemeIcon from '@/shared/assets/icons/themeIcon.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {saveJsonSettings} from "@/entities/User";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage";
import {Icon} from "@/shared/ui/Icon";

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
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleThemeHandler}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} invertedColor/>
        </Button>
    );
});
