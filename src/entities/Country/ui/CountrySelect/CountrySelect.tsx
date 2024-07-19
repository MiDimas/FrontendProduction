import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { SelectOption } from '@/shared/ui/Select';
import { Country } from '../../model/types/country';

interface CountryProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options: SelectOption<Country>[] = [
    {
        value: Country.Armenia,
        content: Country.Armenia,
    },
    {
        value: Country.Belarus,
        content: Country.Belarus,
    },
    {
        value: Country.Kazakhstan,
        content: Country.Kazakhstan,
    },
    {
        value: Country.Russia,
        content: Country.Russia,
    },
    {
        value: Country.Ukraine,
        content: Country.Ukraine,
    },
];
export const CountrySelect = (props: CountryProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Выберите страну')}
            label={t('Выберите страну')}
            items={options}
            onChange={onChange}
            readonly={readonly}
            value={value}
            direction="top right"
        />
    );
};
