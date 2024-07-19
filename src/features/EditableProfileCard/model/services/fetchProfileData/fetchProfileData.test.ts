import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    firstname: 'Peter',
    lastname: 'Parker',
    age: 25,
    username: 'spider',
    city: 'New-York',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};
describe('Тестирование AsyncThunk fetchProfileData', () => {
    test('Успешный запрос', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('Запрос с ошибкой', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('4');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
