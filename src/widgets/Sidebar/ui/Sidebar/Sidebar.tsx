import {classNames} from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
    className?: string
}
export const Sidebar = ({className} : SidebarProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const { t } = useTranslation();
  const toogleClick = () => setCollapse(prev => !prev)

  return (
    <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapse}, [className])}>
      <div className={classNames(classes.switchers)}>
        <ThemeSwitcher />
        <button onClick= {toogleClick}>{t('hide')}</button>
        <LangSwitcher className={classes.lang} />
      </div>

    </div>
  )
};
