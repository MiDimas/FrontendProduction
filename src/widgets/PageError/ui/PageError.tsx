import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const [t] = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <VStack
            justify="center"
            align="center"
            max
            height="100vh"
            className={classNames(cls.PageError, {}, [className])}
        >
            <p>{t('Что-то пошло не так...')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </VStack>
    );
});
