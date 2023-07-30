import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import {InputHTMLAttributes} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                type={type}
                onChange={ changeHandler }
                className={cls.input}
            />
        </div>
    );
};
