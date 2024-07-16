import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface RenderComponentOption {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}
interface TestProviderProps {
    children: ReactNode;
    options?: RenderComponentOption;
}
export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const {
        route = '/',
        initialState,
        asyncReducers,
    } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
                initialState={initialState as StateSchema}
            >
                <I18nextProvider i18n={i18nForTest}>
                    {children}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}
export function renderComponent(component: ReactNode, option: RenderComponentOption = {}) {
    return render(
        <TestProvider options={option}>
            {component}
        </TestProvider>
        ,
    );
}
