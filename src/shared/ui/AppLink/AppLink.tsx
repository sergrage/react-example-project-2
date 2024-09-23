import { FC, ReactNode } from "react";
import { LinkProps, NavLink, NavLinkRenderProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = ( props ) => {
    const { className, children, to, ...otherProps } = props;
    return (
        <NavLink className={(navProps:NavLinkRenderProps ) => classNames(
            classes.AppLink ,
            { [classes.activeLink] : navProps.isActive },
            [className]
        )}
         to={to}
         {...otherProps}>
            {children}
        </NavLink >
    )
};
