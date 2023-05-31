import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Проверка компонента Button', () => {
    test('Тестирование отрисовки кнопки', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST'));
    });
});
