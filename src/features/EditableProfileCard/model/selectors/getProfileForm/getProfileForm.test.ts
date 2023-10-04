import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

const form = {
    firstname: 'Peter',
    lastname: 'Parker',
    age: 25,
    username: 'spider',
    city: 'New-York',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};
describe('getProfileForm', () => {
    test('Возвращаем форму из profile стэйта', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('Возвращаем undefined при пустом стэйте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
