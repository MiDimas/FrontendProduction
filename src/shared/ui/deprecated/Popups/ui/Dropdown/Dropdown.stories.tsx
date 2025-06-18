import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Deprecated/Popups/Dropdown',
    component: Dropdown,
    argTypes: {},
    args: {
        items: [
            /* eslint-disable i18next/no-literal-string */
            {
                href: '/1',
                content: <div>hello</div>,
            },
            {
                href: '/2',
                content: <div>string</div>,
            },
            {
                href: '/3',
                content: <div>world</div>,
            },
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownLightBottomRight: Story = {
    args: {},
};
export const DropdownDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const DropdownLightBottomLeft: Story = {
    args: { direction: 'bottom left' },
};

export const DropdownLightTopLeft: Story = {
    args: { direction: 'top left' },
};

export const DropdownLightTopRight: Story = {
    args: { direction: 'top right' },
};
