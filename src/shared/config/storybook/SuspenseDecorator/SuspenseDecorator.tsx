import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/deprecated/Loader';

export const SuspenseDecorator = (Story: StoryFn) => (
    <Suspense fallback={<Loader />}>
        <Story />
    </Suspense>
);
