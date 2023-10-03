import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

const error = 'error';
describe('getProfileError', () => {
    test('Возвращаем ошибки из profile стэйта', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error },
        };
        expect(getProfileError(state as StateSchema)).toEqual(error);
    });
    test('Возвращаем undefined из profile стэйта', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
