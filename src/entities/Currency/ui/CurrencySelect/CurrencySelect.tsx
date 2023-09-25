import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import cls from './Currency.module.scss';

interface CurrencyProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
}

const options: SelectOption[] = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = (props: CurrencyProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            className={
                classNames(cls.Currency, {}, [className])
            }
            label={t('Выберите валюту')}
            options={options}
            onChange={onChangeHandler}
        />
    );
};
