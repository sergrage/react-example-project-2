import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { DeepPartial } from "app/types/types"

export const storeDecorator = (state: DeepPartial<StateSchema>) => (StoreComponent: React.ComponentType) => {
    return (
        <StoreProvider initialState={state}>
            <StoreComponent />
        </StoreProvider>
    )
}