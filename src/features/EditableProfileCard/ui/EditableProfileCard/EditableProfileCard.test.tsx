import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/config/tests/renderWithTranslation/renderComponent';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin2',
    age: 120,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: 'Erevan',
    username: 'adman',
};
describe('Проверка компонента EditableProfileCard', () => {
    test('Тестирование отрисовки компонента', () => {
        renderComponent(<EditableProfileCard id="1" />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile,
                },
            },
            asyncReducers: {
                profile: profileReducer,

            },
        });
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
