import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Button.module.scss"
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    ROUND = 'round',
    ICON = 'icon'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode,
    theme?: ThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, ...otherProps} = props;

    return (
        <button className={classNames(classes.Button, {[classes[theme]] : true}, [className])} {...otherProps}>
            {children}
        </button>
    )
};
