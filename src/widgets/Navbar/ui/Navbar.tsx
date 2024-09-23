import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classNames(classes.links)}>
        <AppLink to={RoutePath.main} className={classNames(classes.mainLink)}>{t('mainLink')}</AppLink>
        <AppLink to={RoutePath.about}>{t('aboutLink')}</AppLink>
      </div>

    </div>
  )
};


