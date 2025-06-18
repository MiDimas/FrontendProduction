import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Deprecated/Avatar',
    component: Avatar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarMedium: Story = {
    args: {
        // eslint-disable-next-line max-len
        src: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
        size: 150,
    },
};

export const AvatarMin: Story = {
    args: {
        // eslint-disable-next-line max-len
        src: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
        size: 50,
    },
};
