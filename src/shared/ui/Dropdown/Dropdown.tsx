import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    href?: string;
    onClick?: () => void;
}
interface DropdownProps {
    className?: string;
    items?: DropdownItem[];
    trigger?: ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
    const { t } = useTranslation();
    const {
        className,
        items,
        trigger,
    } = props;
    /* eslint-disable i18next/no-literal-string */
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.button}>
                {trigger || <Button>{t('Меню')}</Button> }
            </Menu.Button>
            <Menu.Items className={cls.menu}>
                {items?.map((item) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={item.href} as={Fragment}>
                        {({ active }) => (
                            <button
                                onClick={item.onClick}
                                type="button"
                                className={classNames(cls.item, { [cls.active]: active }, [])}
                            >
                                {item.content}
                            </button>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};
