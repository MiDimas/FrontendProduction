import { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
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

type Story = StoryObj<typeof Flex>;

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
        width: 350,
    },
};

export const AlignStart: Story = {
    args: {
        align: 'start',
        height: '300px',
    },
};
export const AlignEnd: Story = {
    args: {
        align: 'end',
        height: '300px',
    },
};
export const AlignCenter: Story = {
    args: {
        align: 'center',
        height: '300px',
    },
};
export const AlignBaseline: Story = {
    args: {
        align: 'baseline',
        height: '300px',
    },
};
export const AlignStretch: Story = {
    args: {
        align: 'stretch',
        height: '300px',
    },
};

export const Gap8: Story = {
    args: {
        gap: '8',
    },
};

export const Gap16: Story = {
    args: {
        gap: '16',
    },
};

export const Gap32: Story = {
    args: {
        gap: '32',
    },
};

export const Gap64: Story = {
    args: {
        gap: '64',
    },
};
