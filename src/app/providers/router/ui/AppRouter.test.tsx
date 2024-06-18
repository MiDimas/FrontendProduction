import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/config/tests/renderWithTranslation/renderComponent';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        renderComponent(<AppRouter />, {
            route: '/sdfjdsagh',
        });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект неавторизованного пользователя', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteProfile('1'),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой странице для авторизованного пользователя', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: { user: { _initial: true, authData: {} } },
        });
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Закрытый доступ к странице для пользователя без роли', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: { user: { _initial: true, authData: {} } },
        });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ к закрытой странице для пользователя с ролью', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: { user: { _initial: true, authData: { roles: [UserRole.ADMIN] } } },
        });
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
