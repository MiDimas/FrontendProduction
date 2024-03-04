import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
    },
    args: {
        items: [
            /* eslint-disable i18next/no-literal-string */
            { href: '/', content: <div>hello</div> },
            { href: '/', content: <div>string</div> },
            { href: '/', content: <div>world</div> },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof Dropdown>

export const DropdownLight: Story = {
    args: {},
};
export const DropdownDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
