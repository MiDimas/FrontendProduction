import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const AddCommentFormLight: Story = {
    args: {
        onSendComment: (text:string) => {},
    },
}; export const AddCommentFormDark: Story = {
    args: {
        onSendComment: (text:string) => {},
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}; export const AddCommentFormOrange: Story = {
    args: {
        onSendComment: (text:string) => {},
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
