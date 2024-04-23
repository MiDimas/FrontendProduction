import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
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
    decorators: [StoreDecorator({})],
}; export const AddCommentFormDark: Story = {
    args: {
        onSendComment: (text:string) => {},
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}; export const AddCommentFormOrange: Story = {
    args: {
        onSendComment: (text:string) => {},
    },
    decorators: [ThemeDecorator(Theme.ORANGE), StoreDecorator({})],
};
