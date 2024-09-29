import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Text.module.scss"


export enum ThemeText {
    DANGER = 'danger',
}
interface TextProps {
    text?: string;
    className?: string;
    theme?: ThemeText;
    title?: string
}

export const Text = ({ className, text, title, theme }: TextProps) => {

    const mods: Record<string, boolean> = {
        [classes[theme]] : true
    }

    return (
        <div className={classNames(classes.Button, mods, [className])}>
            {title && <h3>{title}</h3>}
            {text && <p>{text}</p>}
        </div>

    )
};
