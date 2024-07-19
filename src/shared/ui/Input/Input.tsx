import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

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
        ...otherProps
    } = props;
    const [hasValue, setHasValue] = useState(!!value);

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setHasValue(!!event.target.value);
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
    useEffect(() => {
        if (value) {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    }, [value]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={changeHandler}
                className={cls.input}
                onFocus={focusHandler}
                onBlur={blurHandler}
                readOnly={readonly}
                {...otherProps}
            />
            {placeholder && (
                <div
                    className={classNames(cls.placeholder, {
                        [cls.placeholderFocus]: hasValue || focus,
                    })}
                >
                    {placeholder}
                </div>
            )}
        </div>
    );
});
