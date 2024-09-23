import {classNames} from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ToggleSidebar } from "shared/ui/ToggleSidebar";


interface SidebarProps {
    className?: string
}
export const Sidebar = ({className} : SidebarProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div data-testid="sidebar" className={classNames(classes.Sidebar, {[classes.collapsed]: collapse}, [className])}>
      <div className={classNames(classes.switchers)}>
        <ThemeSwitcher />
        <ToggleSidebar collapse={collapse} setCollapse={setCollapse}/>
        <LangSwitcher className={classes.lang} />
      </div>

    </div>
  )
};
