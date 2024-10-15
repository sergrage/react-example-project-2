import { classNames, Mods } from "shared/lib/classNames/classNames"
import classes from "./Button.module.scss"
import { ButtonHTMLAttributes, memo, ReactNode } from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    ROUND = 'round',
    ICON = 'icon',
    PRIME = 'prime'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode,
    theme?: ThemeButton
    disabled? : boolean
}



export const Button = memo((props: ButtonProps) => {
    const { className, children, theme = ThemeButton.CLEAR, disabled, ...otherProps} = props;
    const mods: Mods = {
        [classes[theme]]: true,
        [classes['disabled']]: disabled
    }
    return (
        <button className={classNames(classes.Button, mods, [className])} disabled={disabled} {...otherProps}>
            {children}
        </button>
    )
});
