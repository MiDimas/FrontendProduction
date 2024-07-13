import { useEffect } from 'react';

export function useInitialEffect(callback: () => void, anywhere:boolean = false) {
    useEffect(
        () => {
            if (anywhere || (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest')) {
                callback();
            }
        },
        // eslint-disable-next-line
        [],
    );
}
