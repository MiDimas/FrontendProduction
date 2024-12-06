import { memo, useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Устарел, используем новые компоненты из папки @redesigned
 * @deprecated
 *
 */
export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={copyToClipboard}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code className={cls.codeItem}>{text}</code>
        </pre>
    );
});
