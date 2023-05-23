import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/icons/themeDark.svg';
import ThemeLight from 'shared/assets/icons/themeLight.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
        </Button>
    );
};
