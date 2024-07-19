import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    // <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
        <Story />
    </div>
    // </ThemeProvider>
);
