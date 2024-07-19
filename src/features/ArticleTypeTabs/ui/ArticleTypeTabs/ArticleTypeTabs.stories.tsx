import { Meta, StoryObj } from '@storybook/react';
import { ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {},
    args: {
        value: ArticleType.IT,
        onChangeType: () => {},
    },
};

export default meta;

type Story = StoryObj<typeof ArticleTypeTabs>;

export const ArticleTypeTabsLight: Story = {
    args: {},
};
export const ArticleTypeTabsDark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
