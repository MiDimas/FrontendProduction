import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from '@/shared/config/tests/renderWithTranslation/renderComponent';
import { Counter } from './Counter';

describe('Проверка компонента Sidebar', () => {
    test('Тестирование отрисовки компонента', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('Тестирование декремента счетчика', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
    test('Тестирование инкремента счетчика', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
