import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
    },
    args: {
        tabs: [
            {
                value: 'Tab 1',
                content: 'tab 1',
            },
            {
                value: 'Tab 2',
                content: 'tab 2',
            },
            {
                value: 'Tab 3',
                content: 'tab 3',
            },
        ],
        value: 'Tab 2',
        onTabClick: action('onTabClick'),
    },
};

export default meta;

type Story = StoryObj<typeof Tabs>

export const TabsNormal: Story = {
    args: {
    },
};
export const TabsDark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
