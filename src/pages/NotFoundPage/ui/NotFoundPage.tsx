import {classNames} from "shared/lib/classNames/classNames"
import classes from "./NotFoundPage.module.scss"

import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
    className?: string
}
export const NotFoundPage = ({className} : NotFoundPageProps) => {
  const { t } = useTranslation('notFoundPage');
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
          {t('notFoundHeader')}
    </div>
  )
};
