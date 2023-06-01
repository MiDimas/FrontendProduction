import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Проверка компонента Button', () => {
    test('Тестирование отрисовки кнопки', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST'));
    });
    test('Тестирование темы кнопки', () => {
        render(<Button theme={ThemeButton.CLEAR} />);
        expect(screen.getByTestId('ui-btn')).toHaveClass('clear');
    });
});
