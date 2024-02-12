import { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
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
    },
};

export default meta;

type Story = StoryObj<typeof Flex>

export const Row: Story = {
    args: {
        direction: 'row',
    },
};
export const Column: Story = {
    args: {
        direction: 'column',
    },
};

export const RowReverse: Story = {
    args: {
        direction: 'rowReverse',
    },
};
export const ColumnReverse: Story = {
    args: {
        direction: 'columnReverse',
    },
};
export const JustifyStart: Story = {
    args: {
        justify: 'start',
    },
};

export const JustifyEnd: Story = {
    args: {
        justify: 'end',
    },
};

export const JustifyCenter: Story = {
    args: {
        justify: 'center',
    },
};

export const JustifyBetween: Story = {
    args: {
        justify: 'between',
    },
};

export const JustifyAround: Story = {
    args: {
        justify: 'around',
    },
};

export const JustifyStretch: Story = {
    args: {
        justify: 'stretch',
    },
};

export const AlignStart: Story = {
    args: {
        align: 'start',
    },
};
export const AlignEnd: Story = {
    args: {
        align: 'end',
    },
};
export const AlignCenter: Story = {
    args: {
        align: 'center',
    },
};
export const AlignBaseline: Story = {
    args: {
        align: 'baseline',
    },
};
export const AlignStretch: Story = {
    args: {
        align: 'stretch',
    },
};
