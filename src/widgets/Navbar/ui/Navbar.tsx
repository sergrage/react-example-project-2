import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classNames(classes.links)}>
        <AppLink to="/" className={classNames(classes.mainLink)}>Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>

    </div>
  )
};


