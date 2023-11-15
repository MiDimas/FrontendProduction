import { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {

    },
};

export default meta;

type Story = StoryObj<typeof CommentCard>

export const CommentCardNormal: Story = {
    args: {
        comment: { id: '1', text: 'Hello World', user: { id: '2', username: 'whooo?' } },
    },
};
export const CommentCardLoading: Story = {
    args: {
        isLoading: true,
    },
};
