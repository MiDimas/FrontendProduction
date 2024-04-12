import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useRef } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { ListBoxOptionsDirection } from 'shared/types';
import cls from './ListBox.module.scss';
import { mapDirectionClasses } from '../../styles/consts';
import popups from '../../styles/popups.module.scss';

type ListBoxItem = {
    value:string;
    content: ReactNode;
    disabled?: boolean
}
interface ListBoxProps<T extends string> {
    items?: ListBoxItem[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value:T) => void;
    readonly?: boolean;
    direction?: ListBoxOptionsDirection;
    label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;
    const additionalClasses = [mapDirectionClasses[direction]];
    const ref = useRef<HTMLButtonElement>(null);
    const optionRef = useRef<HTMLElement>(null);
    /* eslint-disable i18next/no-literal-string */
    return (
        <HStack gap="8" align="center">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            {label
                && (
                    <span
                        className={cls.label}
                        onClick={() => { ref.current?.click(); }}
                    >
                        {`${label} >`}
                    </span>
                )}
            <HListbox
                value={value}
                onChange={onChange}
                as="div"
                className={classNames(popups.popup, {}, [className])}
                disabled={readonly}
                id={defaultValue}
            >
                <HListbox.Button
                    className={popups.button}
                    as="div"
                    ref={ref}
                >
                    <Button
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>

                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, additionalClasses)}
                    ref={optionRef}
                >
                    { items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected, disabled }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popups.active]: active,
                                        [popups.disabled]: disabled,
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
        </HStack>

    );
};
