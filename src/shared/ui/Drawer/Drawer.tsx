import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Portal } from 'shared/ui/Portal/Portal';
import { a, config, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?:ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;
export const Drawer = memo((props: DrawerProps) => {
    const [{ y }, api] = useSpring(() => ({ y: height }));
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
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
    }, [isOpen, openDrawer, api]);

    const close = useCallback((velocity = 0) => {
        api.start({
            y: height, immediate: false, config: { ...config.stiff, velocity }, onResolve: onClose,
        });
    }, [api, onClose]);

    const bind = useDrag(({
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel,
    }) => {
        if (my < -70) cancel();
        if (last) {
            if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                close();
            } else {
                openDrawer();
            }
        } else {
            api.start({ y: my, immediate: false });
        }
    }, {
        from: [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    });

    if (!isOpen) {
        return null;
    }
    const display = y.to((py) => (py < height ? 'block' : 'none'));
    return (
        <Portal>
            <div className={
                classNames(cls.Drawer, {}, [className])
            }
            >
                <Overlay onClick={close} />
                <a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </a.div>
            </div>
        </Portal>

    );
});
