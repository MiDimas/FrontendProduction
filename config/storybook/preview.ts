import type { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: Theme.LIGHT,
            list: [
                {
                    name: 'light',
                    class: ['app', Theme.LIGHT],
                    color: '#ffffff',
                },
                {
                    name: 'dark',
                    class: ['app', Theme.DARK],
                    color: '#6113b0',
                },
                {
                    name: 'orange',
                    class: ['app', Theme.ORANGE],
                    color: '#fc811c',
                },
            ],
        },
    },
    decorators: [
        StyleDecorator,
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
