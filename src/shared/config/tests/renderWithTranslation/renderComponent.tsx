import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Action, ReducersMapObject } from '@reduxjs/toolkit';

export interface RenderComponentOption {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersMapObject<StateSchema, Action<any>>
}

export function renderComponent(component: ReactNode, option: RenderComponentOption = {}) {
    const {
        route = '/',
        initialState,
        asyncReducers,
    } = option;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
        ,
    );
}
