import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Button.module.scss"
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

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



export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, disabled, ...otherProps} = props;
    const mods: Record<string, boolean> = {
        [classes[theme]]: true,
        [classes['disabled']]: disabled
    }
    return (
        <button className={classNames(classes.Button, mods, [className])} disabled={disabled} {...otherProps}>
            {children}
        </button>
    )
};
