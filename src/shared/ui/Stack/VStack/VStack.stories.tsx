import { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const meta: Meta<typeof VStack> = {
    title: 'shared/VStack',
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

export const VStackJustifyBetween: Story = {
    args: {justify: "between"},
};
export const VStackJustifyCenter: Story = {
    args: {justify: "center"},
};
export const VStackAlignStart: Story =  {
    args: {align: 'start'}
}
export const VStackAlignCenter: Story =  {
    args: {align: 'center'}
}
export const VStackAlignEnd: Story =  {
    args: {align: 'end'}
}
export const VStackAlignBaseline: Story =  {
    args: {align: 'baseline'}
}