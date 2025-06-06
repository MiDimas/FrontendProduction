import { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof UiDesignSwitcher>

export const UiDesignSwitcherNormal: Story = {
    args: {},
};

