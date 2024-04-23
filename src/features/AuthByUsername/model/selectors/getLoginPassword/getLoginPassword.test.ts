import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword тест', () => {
    test('Тестирование возвращения заданного пароля', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('Тестирование возвращения пустой строки при пустом стэйте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
