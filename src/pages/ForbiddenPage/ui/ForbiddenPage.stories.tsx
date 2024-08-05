import { Meta, StoryObj } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
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
