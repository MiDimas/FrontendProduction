import {ReactNode, memo} from 'react';
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './StickyLayout.module.scss';

interface StickyLayoutProps {
    className?: string;
    left?: ReactNode;
    right?: ReactNode;
    content: ReactNode;
}

export const StickyLayout = memo((props: StickyLayoutProps) => {
    const {
        className,
        left,
        right,
        content
    } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    )
})