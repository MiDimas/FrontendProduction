import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername тест', () => {
    test('Тестирование возвращения имени пользователя', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'petux',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('petux');
    });
});
