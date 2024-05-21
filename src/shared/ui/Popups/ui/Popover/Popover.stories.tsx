import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Icon, IconFilling } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification_icon.svg';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
    },
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <span>hello</span>,
        trigger: <Icon Svg={NotificationIcon} colorFilling={IconFilling.FILL} />,
    },
};

export default meta;

type Story = StoryObj<typeof Popover>

export const PopoverNormal: Story = {
    args: {},
};
export const PopoverDark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
