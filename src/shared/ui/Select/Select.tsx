import { useTranslation } from 'react-i18next';
import {
    ChangeEvent, useCallback, useMemo,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}
interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    readonly?: boolean;
    onChange?: (value: T) => void;
    value?: T;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
};
