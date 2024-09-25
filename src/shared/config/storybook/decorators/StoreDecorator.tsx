/* eslint-disable react/display-name */
import { StoreProvider } from "app/providers/StoreProvider"

export const storeDecorator = (StoreComponent: React.ComponentType) => {
    return (
        <StoreProvider >
            <StoreComponent />
        </StoreProvider>
    )
}