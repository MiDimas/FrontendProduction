import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { Currency } from '../../model/types/currency';
import {ToggleFeatures} from "@/shared/lib/features";

interface CurrencyProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options: SelectOption<Currency>[] = [
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.EUR,
        content: Currency.EUR,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
];
export const CurrencySelect = (props: CurrencyProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    const propsCurrency = {
        className: classNames('', {}, [className]),
        defaultValue: t('Выберите валюту'),
        label: t('Выберите валюту'),
        value,
        onChange,
        readonly,
        items: options,
        direction: "top right" as const,
    }

    return (
        <ToggleFeatures feature="isRedesigned"
            off={
                <ListBoxDeprecated
                    {...propsCurrency}
                />
            }
            on={
                <ListBox
                    {...propsCurrency}
                />
            } />

    );
};
