import { Button, ThemeButton } from "shared/ui/Button/Button";
import ArrowLeftRightIcon from "shared/assets/icons/arrows-left-right.svg";
import TwoArrowIcon from "shared/assets/icons/down-left-and-up-right-to-center.svg";

import classes from "./ToggleSidebar.module.scss"
import { memo } from "react";

interface ToggleSidebarProps {
    collapse: boolean
    setCollapse: (value: (arg: boolean) => boolean) => void;
}

export const ToggleSidebar = memo(({ collapse, setCollapse }: ToggleSidebarProps) => {

    const toogleClick = () => {
        setCollapse((prev) => !prev)
    }

    return (
        <Button onClick={toogleClick} theme={ThemeButton.ICON} data-testid="sidebarToogle">
            {collapse ? 
            <ArrowLeftRightIcon className={classes.icon}/> :
            <TwoArrowIcon className={classes.icon}/>}
        </Button>
    )
});