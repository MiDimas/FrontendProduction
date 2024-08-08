import { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const meta: Meta<typeof VStack> = {
    title: 'VStack',
    component: VStack,
    argTypes: {
    },
    args: {
        children: (
            <>
                {/* eslint-disable i18next/no-literal-string */}
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    }
};

export default meta;

type Story = StoryObj<typeof VStack>

export const VStackNormal: Story = {
    args: {justify: "start"},
};
export const VStackJustifyEnd: Story = {
    args: {justify: "end"},
};
