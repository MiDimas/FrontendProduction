import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

export const BugButton = () => {
    const [t] = useTranslation();
    const [error, setError] = useState(false);

    const generateError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    });
    return <Button onClick={generateError}>{t('Сгенерировать ошибку')}</Button>;
};
