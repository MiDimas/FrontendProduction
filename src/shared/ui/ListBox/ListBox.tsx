// import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListbox } from '@headlessui/react';
import { useState } from 'react';
// import cls from './ListBox.module.scss';

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
    return (

        <HListbox
            value={selectedItem}
            onChange={setSelectedItem}
        >
            <HListbox.Button>{selectedItem.name }</HListbox.Button>
            <HListbox.Options>
                {people.map((person) => (
                    <HListbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                    >
                        {person.name}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
};
