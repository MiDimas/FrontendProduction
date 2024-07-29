import { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";
import  AdminPanelPage  from './AdminPanelPage';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof AdminPanelPage>

export const AdminPanelPageNormal: Story = {
    args: {},
};
export const AdminPanelPageDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
