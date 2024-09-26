import { classNames } from "shared/lib/classNames/classNames"
import classes from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input";

interface LoginFormProps {
    className?: string
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Input autoFocus type="text" className={classNames(classes.input)} placeholder="username"/>
            <Input type="password" className={classNames(classes.input)} placeholder="password"/>
            <Button theme={ThemeButton.PRIME}>{t('Sign-In')}</Button>
        </div>
    )
};
