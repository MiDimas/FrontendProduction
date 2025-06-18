import { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";


const meta: Meta<typeof Code> = {
    title: 'shared/Redesigned/Code',
    component: Code,
    argTypes: {
    },
    args: {
        text: 'print("hello world")'
    }
};

export default meta;

type Story = StoryObj<typeof Code>

export const CodeNormal: Story = {
    args: {},
};
export const CodeDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
