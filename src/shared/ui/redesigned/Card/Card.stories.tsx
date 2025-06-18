import { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/shared/ui/deprecated/Text';
import { Card } from './Card';

const meta: Meta = {
    title: 'shared/Redesigned/Card',
    component: Card,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardLight: Story = {
    args: {
        // eslint-disable-next-line
        children: <Text title="Элемент в карточке" text="Просто текст блока текст в карточке" />,
    },
};
