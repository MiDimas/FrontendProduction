import { memo, useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

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
