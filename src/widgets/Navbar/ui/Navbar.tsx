import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const userAuthData = useSelector(getUserAuthData)

  const toggleModal = useCallback(() => { setIsOpenAuthModal((prev) => !prev) }, [isOpenAuthModal])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userAuthData) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <div className={classNames(classes.links)}>
          <Button className={classNames(classes.loginBtn)} theme={ThemeButton.PRIME} onClick={onLogout}>{t('LogoutBtn')}</Button>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classNames(classes.links)}>
        <Button className={classNames(classes.loginBtn)} theme={ThemeButton.PRIME} onClick={toggleModal}>{t('LoginBtn')}</Button>
      </div>
      {isOpenAuthModal && <LoginModal isOpen={isOpenAuthModal} onClose={toggleModal} />}
    </div>
  )
});


