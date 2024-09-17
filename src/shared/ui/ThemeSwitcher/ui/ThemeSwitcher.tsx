import {classNames} from "shared/lib/classNames/classNames"
import classes from "./ThemeSwitcher.module.scss"
import { useTheme } from "app/providers/ThemeProvider";

import ThemeDarkIcon from "shared/assets/icons/theme-dark.svg";
import ThemeLightIcon from "shared/assets/icons/theme-light.svg";
import { Theme } from "app/providers/ThemeProvider/index";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps ) => {
    const {theme, toggleTheme} = useTheme();
  return (
      <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
        {theme === Theme.DARK ? <ThemeDarkIcon width={'20px'} fill="gray"/> : <ThemeLightIcon width={'20px'} fill="yellow"/>}
      </Button>
  )
};
