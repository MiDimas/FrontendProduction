import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountryProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options: SelectOption<Country>[] = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },

];
export const CountrySelect = (props: CountryProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    return (
        <Select <Country>
            className={
                classNames('', {}, [className])
            }
            label={t('Выберите страну')}
            options={options}
            onChange={onChange}
            readonly={readonly}
            value={value}
        />
    );
};
