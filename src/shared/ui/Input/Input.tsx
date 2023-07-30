import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const [hasValue, setHasValue] = useState(false);
    const [focus, setFocus] = useState(false);
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

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
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                type={type}
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
