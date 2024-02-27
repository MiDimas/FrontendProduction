// import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ListBox.module.scss';

interface ListBoxProps {
    className?: string;
}
const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
];
export const ListBox = (props: ListBoxProps) => {
    const [selectedItem, setSelectedItem] = useState(people[0]);
    const { className } = props;
    /* eslint-disable i18next/no-literal-string */
    return (
        <HListbox
            value={selectedItem}
            onChange={setSelectedItem}
            as="div"
            className={cls.ListBox}
        >
            <HListbox.Button as={Fragment}>
                <Button>
                    {selectedItem.name}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={cls.options}>
                {people.map((person) => (
                    <HListbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
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
                                {person.name}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
};
