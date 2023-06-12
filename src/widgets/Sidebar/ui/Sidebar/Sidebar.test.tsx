import { fireEvent, screen } from '@testing-library/react';
import {
    renderComponent,
} from 'shared/config/tests/renderWithTranslation/renderComponent';
import { Sidebar } from './Sidebar';

describe('Проверка компонента Sidebar', () => {
    test('Тестирование отрисовки компонента', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Тестирование сворачивания компонента', () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-sidebar');
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
