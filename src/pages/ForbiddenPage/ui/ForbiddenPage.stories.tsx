import { Meta, StoryObj } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

const meta: Meta<typeof ForbiddenPage> = {
    title: 'ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof ForbiddenPage>

export const ForbiddenPageNormal: Story = {
    args: {},
};
export const ForbiddenPageDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
