import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy_icon.svg';
import { Icon, IconFilling } from 'shared/ui/Icon/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: ReactNode
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        children,
    } = props;
    return (
        <pre className={
            classNames(cls.Code, {}, [className])
        }
        >
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {children}
            </code>
        </pre>

    );
});
