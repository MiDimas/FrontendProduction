import { memo, useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy_icon.svg';
import CopyIconNew from '@/shared/assets/icons/Copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button , ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IccnDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './Code.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";

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
        <ToggleFeatures feature="isRedesigned"
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={copyToClipboard}>
                        <IccnDeprecated Svg={CopyIcon}/>
                    </Button>
                    <code className={cls.codeItem}>{text}</code>
                </pre>
            }
            on={
                <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
                    <Icon
                        Svg={CopyIconNew}
                        clickable
                        onClick={copyToClipboard}
                        className={cls.copyBtn}
                    />
                    <code className={cls.codeItem}>{text}</code>
                </pre>
            }
        />

    );
});
