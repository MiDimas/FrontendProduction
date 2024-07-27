import { Meta, StoryObj } from '@storybook/react';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";
import  AdminPanelPage  from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof AdminPanelPage>

export const AdminPanelPageNormal: Story = {
    args: {},
};
export const AdminPanelPageDark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
