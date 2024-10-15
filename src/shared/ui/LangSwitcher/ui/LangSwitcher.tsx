import { classNames } from "shared/lib/classNames/classNames"
import classes from "./LangSwitcher.module.scss"
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const toogleLangClick = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    return (
        <Button className={classNames(classes.LangSwitcher,  {}, [className])}
                theme={ThemeButton.ROUND}
                onClick={toogleLangClick}
                >
            {i18n.language === 'ru' ? 'en' : 'ru'}
        </Button>
    )
});
