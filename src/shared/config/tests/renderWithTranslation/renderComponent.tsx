import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line midi-plugin-import/layer-imports
import '@/app/styles/index.scss';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { Theme } from '@/shared/const/theme';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface RenderComponentOption {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
    theme?: Theme;
}
interface TestProviderProps {
    children: ReactNode;
    options?: RenderComponentOption;
}
export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const { route = '/', initialState, asyncReducers, theme = Theme.LIGHT } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
                initialState={initialState as StateSchema}
            >
                <I18nextProvider i18n={i18nForTest}>
                    <div className={`app ${theme}`}>{children}</div>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}
export function renderComponent(component: ReactNode, option: RenderComponentOption = {}) {
    return render(<TestProvider options={option}>{component}</TestProvider>);
}
