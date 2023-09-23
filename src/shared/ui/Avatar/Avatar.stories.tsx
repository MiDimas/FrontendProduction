import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from './avatar.webp';

const meta: Meta<typeof Avatar> = {
    title: '/Avatar',
    component: Avatar,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarMedium: Story = {
    args: {
        src: AvatarImg,
        size: 150,
    },
};

export const AvatarMin: Story = {
    args: {
        src: AvatarImg,
        size: 50,
    },
};
