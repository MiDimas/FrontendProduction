import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
    args: {
        children: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit. Nisi, voluptatum.`,
        isOpen: true,
        noPortal: true,
    },
};

export const ModalDark: Story = {
    args: {
        children: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit. Nisi, voluptatum.`,
        isOpen: true,
        noPortal: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
