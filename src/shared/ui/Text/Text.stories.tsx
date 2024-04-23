import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextLight: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: `Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Asperiores dolorum id odio quasi quisquam ut?`,
    },
};
export const TextError: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: `Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Asperiores dolorum id odio quasi quisquam ut?`,
        theme: TextTheme.ERROR,
    },
};

export const TextDark: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',

    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTitle: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
    },
};
export const OnlyText: Story = {
    args: {
        text: `Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Asperiores dolorum id odio quasi quisquam ut?`,
    },
};
export const OnlyTitleDark: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTextDark: Story = {
    args: {
        text: `Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Asperiores dolorum id odio quasi quisquam ut?`,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextSizeS: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: `Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Asperiores dolorum id odio quasi quisquam ut?`,
        size: TextSize.S,
    },
};
export const TextSizeL: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: `Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Asperiores dolorum id odio quasi quisquam ut?`,
        size: TextSize.L,
    },
};
