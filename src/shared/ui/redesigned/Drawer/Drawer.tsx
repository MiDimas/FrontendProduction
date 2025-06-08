import { memo, ReactNode, useCallback, useEffect } from 'react';
import { Overlay } from '@/shared/ui/redesigned/Overlay';
import { Portal } from '@/shared/ui/redesigned/Portal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import cls from './Drawer.module.scss';
import {toggleFeatures} from "@/shared/lib/features";

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;


const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { className, children, isOpen, onClose, lazy } = props;
    // const {
    //     isClosing,
    //     isOpening,
    //     isMounted,
    //     close,
    // } = useModal({
    //     onClose,
    //     isOpen,
    // });
    // const mods:Mods = {
    //     [cls.opened]: isOpen && !isOpening,
    //     [cls.closing]: isClosing,
    // };

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, openDrawer]);

    const close = useCallback(
        (velocity = 0) => {
            api.start({
                y: height,
                immediate: false,
                config: {
                    ...Spring.config.stiff,
                    velocity,
                },
                onResolve: onClose,
            });
        },
        [api, onClose, Spring.config.stiff],
    );

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
            if (my < -70) cancel();
            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({
                    y: my,
                    immediate: false,
                });
            }
        },
        {
            from: [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }
    const display = y.to((py) => (py < height ? 'block' : 'none'));
    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [
                className,
                toggleFeatures({
                    name: "isRedesigned",
                    on: () => cls.drawerNew,
                    off: () => cls.drawerOld
                })
            ])}>
                <Overlay onClick={close} />
                <Spring.a.div
                    className={cls.sheet}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();
    if (!isLoaded) {
        return null;
    }
    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
