import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { Country } from '../../model/types/country';
import {ToggleFeatures} from "@/shared/lib/features";

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

    const propsCountry = {
        className:classNames('', {}, [className]),
        defaultValue:t('Выберите страну'),
        label:t('Выберите страну'),
        items:options,
        onChange,
        readonly,
        value,
        direction:"top right" as const,
    }

    return (
        <ToggleFeatures feature="isRedesigned"
            off={
                <ListBoxDeprecated
                    {...propsCountry}
                />
            }
            on={
                <ListBox
                    {...propsCountry}
                />
            }
            />

    );
};
