import { classNames } from "shared/lib/classNames/classNames"
import classes from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { Text } from "shared/ui/Text";
import { ThemeText } from "shared/ui/Text/ui/Text";


interface LoginFormProps {
    className?: string
}
export const LoginForm = memo(
    ({ className }: LoginFormProps) => {
        const { t } = useTranslation();

        const dispatch = useDispatch<AppDispatch>();

        const { username, password, isLoading, error } = useSelector(getLoginState);

        const onUsernameChange = useCallback((value: string) => {
            dispatch(loginActions.setUsername(value))
        }, [dispatch])

        const onPasswordChange = useCallback((value: string) => {
            dispatch(loginActions.setPassword(value))
        }, [dispatch])

        const onLoginClick = useCallback(() => {
            dispatch(loginByUsername({ username, password }))
        }, [dispatch, username, password]);

        return (
            <div className={classNames(classes.LoginForm, {}, [className])}>
                <Text title={t('AuthForm')} />
                {error && <div><Text theme={ThemeText.DANGER} text={t(error)}/ ></div>}
                <Input autoFocus type="text" value={username} onChange={onUsernameChange} className={classNames(classes.input)} placeholder="username" />
                <Input type="password" value={password} onChange={onPasswordChange} className={classNames(classes.input)} placeholder="password" />
                <Button onClick={onLoginClick} disabled={isLoading} theme={ThemeButton.PRIME}>{t('Sign-In')}</Button>
            </div>
        )
    });
