import { Meta, StoryObj } from '@storybook/react';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import  ArticleEditPage  from './ArticleEditPage';
import {Theme} from "@/shared/const/theme";

const meta: Meta<typeof ArticleEditPage> = {
    title: 'ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof ArticleEditPage>

export const ArticleEditPageNormal: Story = {
    args: {},
};
export const ArticleEditPageDark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
