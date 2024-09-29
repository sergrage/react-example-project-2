import { Theme, ThemeProvider } from "app/providers/ThemeProvider"

export const themeDecorator = (theme: Theme) => (StoreComponent: React.ComponentType  ) =>  {
    return (
        <ThemeProvider initTheme={theme}>
            <div className={`app ${theme}`}>
                <StoreComponent />
            </div>
        </ThemeProvider>

    )
}