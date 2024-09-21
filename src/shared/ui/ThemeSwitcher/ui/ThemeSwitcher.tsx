import {classNames} from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider";

import ThemeDarkIcon from "/src/shared/assets/icons/theme-dark.svg";
import ThemeLightIcon from "/src/shared/assets/icons/theme-light.svg";
import { Theme } from "app/providers/ThemeProvider/index";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps ) => {
    const {theme, toggleTheme} = useTheme();
  return (
      <Button onClick={toggleTheme} theme={ThemeButton.CLEAR} className={classNames('', {}, [className])}>
        {theme === Theme.DARK ? <ThemeDarkIcon width={'20px'} fill="gray"/> : <ThemeLightIcon width={'20px'} fill="yellow"/>}
      </Button>
  )
};
