import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import { memo, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ToggleSidebar } from "shared/ui/ToggleSidebar";
import { sidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SIdebarItem/SIdebarItem";


interface SidebarProps {
  className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div data-testid="sidebar" className={classNames(classes.Sidebar, { [classes.collapsed]: collapse }, [className])}>
      <div className={classNames(classes.menu)}>
        {sidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapse={collapse} />
        )}
      </div>

      <div className={classNames(classes.switchers)}>
        <ThemeSwitcher />
        <ToggleSidebar collapse={collapse} setCollapse={setCollapse} />
        <LangSwitcher className={classes.lang} />
      </div>

    </div>
  )
});
