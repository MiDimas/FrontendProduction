import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { ListBoxOptionsDirection } from 'shared/types';
import { AppLink } from 'shared/ui/AppLink/AppLink';
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
    direction?: ListBoxOptionsDirection;
}
const mapDirectionClasses: Record<ListBoxOptionsDirection, string> = {
    'bottom right': cls.optionBottomRight,
    'top right': cls.optionTopRight,
    'bottom left': cls.optionBottomLeft,
    'top left': cls.optionTopLeft,
};
export const Dropdown = (props: DropdownProps) => {
    const { t } = useTranslation();
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;
    /* eslint-disable i18next/no-literal-string */
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.button}>
                {trigger || <div className={cls.buttonPlate}>{t('Меню')}</div> }
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClasses[direction]])}>
                {items?.map((item, id) => {
                    /* Use the `active` state to conditionally style the active item. */
                    const content = ({ active }:{active: boolean}) => (
                        <button
                            onClick={item.onClick}
                            type="button"
                            disabled={item.disabled}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item key={`dropdown${id}`} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
