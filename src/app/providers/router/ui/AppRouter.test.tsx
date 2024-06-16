import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/config/tests/renderWithTranslation/renderComponent';
import AppRouter from './AppRouter';
import { getRouteAbout } from '@/shared/const/router';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
});
