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
interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value:string) => void;
}
export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
    } = props;

    /* eslint-disable i18next/no-literal-string */
    return (
        <HListbox
            value={value}
            onChange={onChange}
            as="div"
            className={classNames(cls.ListBox, {}, [className])}
        >
            <HListbox.Button className={cls.trigger} as="div">
                <Button>
                    {value ?? defaultValue}
                </Button>

            </HListbox.Button>
            <HListbox.Options className={cls.options}>
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
