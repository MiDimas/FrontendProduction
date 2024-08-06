import { Meta, StoryObj } from '@storybook/react';
import { HStack } from './HStack';


const meta: Meta<typeof HStack> = {
    title: 'shared/HStack',
    component: HStack,
    argTypes: {},
    args: {
        children: (
            <>
                {/* eslint-disable i18next/no-literal-string */}
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export default meta;

type Story = StoryObj<typeof HStack>;

export const JustifyStart: Story = {
    args: {
        justify: 'start'
    },
};
export const JustifyEnd: Story = {
    args: {
        justify: 'end'
    },
};
export const JustifyCenter: Story = {
    args: {
        justify: 'center'
    },
};
export const JustifyBetween: Story = {
    args: {
        justify: 'between'
    },
};
export const Gap16: Story = {
    args: {
        gap: '16'
    },
};
