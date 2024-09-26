import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useCallback, useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false);
  const toggleModal = useCallback(() => { setIsOpenAuthModal((prev) => !prev) }, [isOpenAuthModal])
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classNames(classes.links)}>
        <AppLink to={RoutePath.main} className={classNames(classes.mainLink)}>{t('mainLink')}</AppLink>
        <AppLink to={RoutePath.about}>{t('aboutLink')}</AppLink>
        <Button className={classNames(classes.loginBtn)} theme={ThemeButton.PRIME} onClick={toggleModal}>{t('LoginBtn')}</Button>
      </div>
      <LoginModal isOpen={isOpenAuthModal} onClose={toggleModal} />
    </div>
  )
};


