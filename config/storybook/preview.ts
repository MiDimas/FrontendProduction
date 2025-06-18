import type { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';
import {FeatureFlagsDecorator} from "../../src/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator";
import {AppDecorator} from "../../src/shared/config/storybook/AppDecorator/AppDecorator";

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
                    class: [Theme.LIGHT],
                    color: '#ffffff',
                },
                {
                    name: 'dark',
                    class: [ Theme.DARK],
                    color: '#6113b0',
                },
                {
                    name: 'orange',
                    class: [Theme.ORANGE],
                    color: '#fc811c',
                },
            ],
        },
    },
    decorators: [
        AppDecorator,
        StyleDecorator,
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        FeatureFlagsDecorator({})
    ],
};

export default preview;
