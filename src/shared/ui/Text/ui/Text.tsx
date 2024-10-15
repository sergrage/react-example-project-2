import { classNames, Mods } from "shared/lib/classNames/classNames"
import classes from "./Text.module.scss"
import { memo } from "react";


export enum ThemeText {
    DANGER = 'danger',
    NORMAL = 'normal',
}
interface TextProps {
    text?: string;
    className?: string;
    theme?: ThemeText;
    title?: string
}

export const Text = memo(({ className, text, title, theme = ThemeText.NORMAL }: TextProps) => {

    const mods: Mods = {
        [classes[theme]]: true
    }

    return (
        <div className={classNames(classes.Button, mods, [className])}>
            {title && <h3>{title}</h3>}
            {text && <p>{text}</p>}
        </div>

    )
});
