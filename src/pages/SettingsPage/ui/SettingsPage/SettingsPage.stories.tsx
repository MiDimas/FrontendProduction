import { Meta, StoryObj } from '@storybook/react';
import  SettingsPage  from './SettingsPage';

const meta: Meta<typeof SettingsPage> = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof SettingsPage>

export const SettingsPageNormal: Story = {
    args: {},
};