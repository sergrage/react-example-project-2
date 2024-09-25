import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/types";
import { ReactNode } from "react";
import { I18nextProvider } from 'react-i18next';
import i18nForTests from "shared/config/i18n/i18nForTests";

export interface componentRenderOptions {
    route?: string;
    initialState? : DeepPartial<StateSchema>
}

export function renderComponent(component: ReactNode, options: componentRenderOptions = {}) {
    const { initialState } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </StoreProvider>
    )
}