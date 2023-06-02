import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {

    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
    },
};
