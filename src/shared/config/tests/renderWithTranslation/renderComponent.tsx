import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface RenderComponentOption {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function renderComponent(component: ReactNode, option: RenderComponentOption = {}) {
    const {
        route = '/',
        initialState,
    } = option;
    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
