import {classNames} from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string
}
export const Sidebar = ({className} : SidebarProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const toogleClick = () => setCollapse(prev => !prev)
  return (
    <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapse}, [className])}>
      <div className={classNames(classes.switchers)}>
        <ThemeSwitcher />
        <button onClick= {toogleClick}>toogle</button>
      </div>

    </div>
  )
};
