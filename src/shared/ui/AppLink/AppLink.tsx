import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = ( props ) => {
    const { className, children, to, ...otherProps } = props;
    return (
        <Link className={classNames(classes.AppLink, {}, [className])} to={to} {...otherProps}>
            {children}
        </Link>
    )
};
