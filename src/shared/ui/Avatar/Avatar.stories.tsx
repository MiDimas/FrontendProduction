import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/avatar.webp';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
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
