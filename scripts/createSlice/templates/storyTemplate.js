module.exports = (componentName, layerName = '') => (
    `
    import { Meta, StoryObj } from '@storybook/react';
    import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
    import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
    import { Theme } from 'app/providers/ThemeProvider';
    import { ${componentName} } from './${componentName}';

    const meta: Meta<typeof ${componentName}> = {
        title: '${layerName ? `${layerName}/` : layerName}${componentName}',
        component: ${componentName},
        argTypes: {
        },
    };
    
    export default meta;
    
    type Story = StoryObj<typeof ${componentName}>
    
    export const ${componentName}Light: Story = {
        args: {},
    };
    export const ${componentName}Dark: Story = {
        args: {},
        decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
    };

    `
);
