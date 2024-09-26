import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Input.module.scss"
import { InputHTMLAttributes, memo, useEffect, useRef } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
}



export const Input = memo((props: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (props.autoFocus) {
            inputRef.current?.focus();
        }
    }, [props.autoFocus, inputRef])

    const { className, value, onChange, type = 'text', ...other } = props;

    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
    }

    return (
        <input ref={inputRef}
            className={classNames(classes.Input, {}, [className])}
            value={value}
            type={type}
            onChange={onInputHandler} {...other} />
    )
});

Input.displayName = 'Input';