import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (Story: StoryFn) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);
