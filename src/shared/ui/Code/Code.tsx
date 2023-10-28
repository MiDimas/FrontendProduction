import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    return (
        <pre className={
            classNames(cls.Code, {}, [className])
        }
        >
            <div className={cls.copyBtn}>{t('Копировать')}</div>
            <code>
                {children}
            </code>
        </pre>

    );
});
