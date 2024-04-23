import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    // <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
        <Story />
    </div>
    // </ThemeProvider>

);
