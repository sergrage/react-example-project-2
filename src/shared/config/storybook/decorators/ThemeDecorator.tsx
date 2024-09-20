/* eslint-disable react/display-name */
import { Theme } from "app/providers/ThemeProvider"

export const themeDecorator = (theme: Theme) => (StoreComponent: React.ComponentType  ) =>  {
    return (
        <div className={`app ${theme}`}>
            <StoreComponent />
        </div>
    )
}