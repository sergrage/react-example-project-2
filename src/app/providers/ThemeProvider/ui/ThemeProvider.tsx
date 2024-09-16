import { useMemo, useState, FC, ReactNode } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface Props {
    children: ReactNode | ReactNode[]
}

const ThemeProvider: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);


    const defaultProps = useMemo(()=> (
        {
            theme,
            setTheme
        }
    ), [theme, setTheme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;