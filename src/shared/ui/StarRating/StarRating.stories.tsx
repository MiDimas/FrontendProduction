import { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof StarRating>

export const StarRatingNormal: Story = {
    args: {},
};
export const StarRatingNormalGrading: Story = {
    args: {
        selected: 3
    },
};
export const StarRatingDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const StarRatingDarkGrading: Story = {
    args: {
        selected: 4
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
