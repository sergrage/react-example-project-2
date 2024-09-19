import {classNames} from "shared/lib/classNames/classNames"
import classes from "./ErrorFallBack.module.scss"
import { useTranslation } from "react-i18next";
import { FallbackProps } from "react-error-boundary";

export const ErrorFallBack = ({error} : FallbackProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(classes.ErrorFallBack)}>
        {t('errorFallBack')}
        <p>{error.message}</p>
    </div>
  )
};
