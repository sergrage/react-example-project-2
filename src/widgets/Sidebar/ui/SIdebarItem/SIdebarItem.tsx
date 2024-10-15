import { classNames } from "shared/lib/classNames/classNames"
import classes from "./SidebarItem.module.scss"
import { AppLink } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface SidebarItemProps {
    item: SidebarItemType;
    collapse?: boolean
}
export const SidebarItem = memo(({ item, collapse }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink to={item.path} className={classNames(classes.mainLink)}>
            {item.icon ? <item.icon className={classNames(classes.icon)} /> : null}  {!collapse && t(item.text)} 
        </AppLink>

    )
});
