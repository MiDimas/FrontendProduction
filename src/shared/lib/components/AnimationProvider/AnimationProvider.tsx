import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export const useAnimationLibs = () => (
    useContext(AnimationContext)
);
export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    const payload = useMemo<AnimationContextPayload>(() => (
        {
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
            isLoaded,
        }
    ), [isLoaded]);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, [setIsLoaded]);

    return (
        <AnimationContext.Provider value={payload}>
            {children}
        </AnimationContext.Provider>
    );
};
