import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/config/tests/renderWithTranslation/renderComponent';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { userEvent } from '@testing-library/user-event';
import { $api } from 'shared/api/api';
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
const option = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: { authData: { id: '1' } },
    },
    asyncReducers: {
        profile: profileReducer,

    },
};
describe('Проверка компонента EditableProfileCard', () => {
    test('Тестирование кнопки редактирования', async () => {
        renderComponent(<EditableProfileCard id="1" />, option);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });
    test('Тестирование обнуления информации при отмене редактирования', async () => {
        renderComponent(<EditableProfileCard id="1" />, option);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('');

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin2');
    });
    test('Тестирование ошибки при не заполнении обязательного поля', async () => {
        renderComponent(<EditableProfileCard id="1" />, option);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(screen.getByTestId('ProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Тестирование отправки запроса при успешном изменении', async () => {
        const spy = jest.spyOn($api, 'put');
        renderComponent(<EditableProfileCard id="1" />, option);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(spy).toHaveBeenCalled();
    });
});
