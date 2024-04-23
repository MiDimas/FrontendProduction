import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import ThemeDark from '@/shared/assets/icons/themeDark.svg';
import ThemeLight from '@/shared/assets/icons/themeLight.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
    startTheme?: Theme;
}

export const ThemeSwitcher = memo(({
    className,
    startTheme,
}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK || startTheme === Theme.DARK
                ? <ThemeDark />
                : <ThemeLight />}
        </Button>
    );
});
