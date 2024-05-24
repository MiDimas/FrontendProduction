import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectOption } from '@/shared/ui/Select';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencyProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options: SelectOption<Currency>[] = [
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
        readonly,
    } = props;

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Выберите валюту')}
            label={t('Выберите валюту')}
            value={value}
            onChange={onChange}
            readonly={readonly}
            items={options}
            direction="top right"
        />
    );
};
