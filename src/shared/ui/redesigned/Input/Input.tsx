import {ChangeEvent, InputHTMLAttributes, memo, ReactElement, useEffect, useRef, useState} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {HStack} from "@/shared/ui/redesigned/Stack";
import {Text} from "@/shared/ui/redesigned/Text";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
    label?: string;
}

export const Input = memo((props: InputProps) => {
    const [focus, setFocus] = useState(false);
    const ref = useRef<HTMLInputElement | null>(null);
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autofocus = false,
        readonly,
        addonLeft,
        addonRight,
        label,
        ...otherProps
    } = props;

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };
    const focusHandler = () => {
        setFocus(true);
    };
    const blurHandler = () => {
        setFocus(false);
    };

    useEffect(() => {
        if (autofocus) {
            setFocus(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: focus,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={changeHandler}
                className={cls.input}
                onFocus={focusHandler}
                onBlur={blurHandler}
                placeholder={placeholder}
                readOnly={readonly}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    )
    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label}/>
                {input}
            </HStack>
        )
    }
    return input;
});
