import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';

describe('Проверка компонента Button', () => {
    test('Тестирование отрисовки кнопки', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST'));
    });
    test('Тестирование темы кнопки', () => {
        render(<Button theme={ButtonTheme.CLEAR} />);
        expect(screen.getByTestId('ui-btn')).toHaveClass('clear');
    });
});
