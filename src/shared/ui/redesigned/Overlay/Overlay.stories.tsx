import { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Overlay } from './Overlay';
import {Theme} from "@/shared/const/theme";

const meta: Meta<typeof Overlay> = {
    title: 'shared/Redesigned/Overlay',
    component: Overlay,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof Overlay>

export const OverlayNormal: Story = {
    args: {},
};
export const OverlayDark: Story = {
    args: {},
    decorators: [ ThemeDecorator(Theme.DARK)],
};
