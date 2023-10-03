import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

const data = {
    firstname: 'Peter',
    lastname: 'Parker',
    age: 25,
    username: 'spider',
    city: 'New-York',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};
describe('getProfileData', () => {
    test('Возвращаем дату из profile стэйта', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('Возвращаем undefined из profile стэйта', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
