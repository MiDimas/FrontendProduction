import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Проверка компонента Button', () => {
    test('Тестирование отрисовки кнопки', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST'));
    });
    test('Тестирование темы кнопки', () => {
        render(<Button variant='clear' />);
        expect(screen.getByTestId('ui-btn')).toHaveClass('clear');
    });
});
