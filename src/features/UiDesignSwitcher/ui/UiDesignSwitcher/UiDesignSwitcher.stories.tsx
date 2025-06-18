import { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    argTypes: {
    },
    decorators: [StoreDecorator({})]
};

export default meta;

type Story = StoryObj<typeof UiDesignSwitcher>

export const UiDesignSwitcherNormal: Story = {
    args: {},
};

