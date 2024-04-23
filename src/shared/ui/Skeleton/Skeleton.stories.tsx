import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton > = {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonNormal = {
    args: {
        height: 200,
        width: '100%',
    },
};

export const SkeletonCircle = {
    args: {
        height: 100,
        width: 100,
        border: '50%',
    },
};

export const SkeletonNormalDark = {
    args: {
        height: 200,
        width: '100%',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SkeletonCircleDark = {
    args: {
        height: 100,
        width: 100,
        border: '50%',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
