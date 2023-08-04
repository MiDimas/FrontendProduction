import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = (props: InputProps) => {
    const [focus, setFocus] = useState(false);
    const ref = useRef<HTMLInputElement>();
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autofocus = false,
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
            ref.current.focus();
        }
    }, [autofocus]);
    useEffect(() => {
        if (value) {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    }, [value]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                ref={ref}
                type={type}
                value={value || undefined}
                onChange={changeHandler}
                className={cls.input}
                onFocus={focusHandler}
                onBlur={blurHandler}
                {...otherProps}
            />
            {placeholder
                && (
                    <div className={classNames(
                        cls.placeholder,
                        { [cls.placeholderFocus]: hasValue || focus },
                    )}
                    >
                        {placeholder}
                    </div>
                )}
        </div>
    );
};
