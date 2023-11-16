import { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {

    },
};

export default meta;

type Story = StoryObj<typeof CommentList>

export const CommentListNormal: Story = {
    args: {
        comments: [
            { id: '1', user: { id: '1', username: 'petushok' }, text: 'first comment' },
            { id: '2', user: { id: '2', username: 'triceratops' }, text: 'second comment' },
        ],
    },
};
export const CommentListLoading: Story = {
    args: {
        isLoading: true,
    },
};
export const CommentListClear: Story = {
    args: {
        comments: [],
        isLoading: false,
    },
};
