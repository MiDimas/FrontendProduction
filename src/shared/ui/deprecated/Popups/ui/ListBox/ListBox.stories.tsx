import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {},
    args: {
        value: 'start',
        items: [
            { value: 'Один', content: 'Один' },
            { value: 'Два', content: 'Два' },
            { value: 'Три', content: 'Три' },
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

type Story = StoryObj<typeof ListBox>;

export const ListBoxLightBottomRight: Story = {
    args: {},
};
export const ListBoxDarkBottomRight: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ListBoxLightBottomLeft: Story = {
    args: { direction: 'bottom left' },
};
export const ListBoxLightTopRight: Story = {
    args: { direction: 'top right' },
};
export const ListBoxLightTopLeft: Story = {
    args: { direction: 'top left' },
};
