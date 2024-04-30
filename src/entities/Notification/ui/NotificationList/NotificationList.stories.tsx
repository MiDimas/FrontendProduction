import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationList } from './NotificationList';

const notification = {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло событие',
    href: 'http://localhost:3000/admin',
};

const meta: Meta<typeof NotificationList> = {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:6006/notifications',
                method: 'GET',
                status: 200,
                response: [
                    notification,
                    { ...notification, id: '2' },
                ],
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof NotificationList>

export const NotificationListNormal: Story = {
    args: {},
};
export const NotificationListDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
