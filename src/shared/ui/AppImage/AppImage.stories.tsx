import { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";
import {Skeleton} from "@/shared/ui/Skeleton";



const meta: Meta<typeof AppImage> = {
    title: 'AppImage',
    component: AppImage,
    argTypes: {
    },
    args: {
        fallback: <Skeleton width="100%" height="200px" />,
        alt: "image",
        src: "/shared/assets/tests/avatar.webp"
    }
};

export default meta;

type Story = StoryObj<typeof AppImage>

export const AppImageNormal: Story = {
    args: {},
};
export const AppImageDark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
