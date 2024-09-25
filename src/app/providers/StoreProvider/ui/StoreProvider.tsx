import { ReactNode } from "react";
import { Provider } from 'react-redux';
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/stateSchema";
import { DeepPartial } from "app/types/types";

interface SroreProviderProps {
    children?: ReactNode | ReactNode[],
    initialState?: DeepPartial<StateSchema> 
}
export const StoreProvider = ({ children, initialState }: SroreProviderProps) => {

    const store = createReduxStore(initialState as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>

    )
};
