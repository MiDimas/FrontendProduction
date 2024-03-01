// import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ListBox.module.scss';

type ListBoxItem = {
    value:string;
    content: ReactNode;
    disabled?: boolean
}
type ListBoxOptionsDirection = 'top' | 'bottom';
interface ListBoxProps<T extends string> {
    items?: ListBoxItem[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value:T) => void;
    readonly?: boolean;
    direction?: ListBoxOptionsDirection;
}
const mapDirectionClasses: Record<ListBoxOptionsDirection, string> = {
    bottom: cls.optionBottom,
    top: cls.optionTop,
};
export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
    } = props;
    const additionalClasses = [mapDirectionClasses[direction]];
    /* eslint-disable i18next/no-literal-string */
    return (
        <HListbox
            value={value}
            onChange={onChange}
            as="div"
            className={classNames(cls.ListBox, {}, [className])}
            disabled={readonly}
        >
            <HListbox.Button
                className={cls.trigger}
                as="div"
            >
                <Button
                    disabled={readonly}
                >
                    {value ?? defaultValue}
                </Button>

            </HListbox.Button>
            <HListbox.Options className={classNames(cls.options, {}, additionalClasses)}>
                {items?.map((item) => (
                    <HListbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active, selected, disabled }) => (
                            <li
                                className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: disabled,
                                }, [])}
                            >
                                {selected && '***'}
                                {item.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
};
