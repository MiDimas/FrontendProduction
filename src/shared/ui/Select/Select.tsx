import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    readonly?: boolean;
    onChange?: (value: string) => void;
    value?: string;
}

export const Select = memo((props: SelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        label,
        options,
        readonly,
        onChange,
        value,
    } = props;

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    const optionsList = useMemo(() => options?.map(({
        value,
        content,
    }) => (
        <option
            value={value}
            className={cls.option}
            key={value}
        >
            {content}
        </option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {label
                && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
