import { screen } from '@testing-library/react';
import {
    renderComponent,
} from 'shared/config/tests/renderWithTranslation/renderComponent';
import { EditableProfileCard } from './EditableProfileCard';

describe('Проверка компонента EditableProfileCard', () => {
    test('Тестирование отрисовки компонента', () => {
        renderComponent(<EditableProfileCard />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
