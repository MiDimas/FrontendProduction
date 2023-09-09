import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('Тестирование loginSlice', () => {
    test('Проверка изменения поля username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'petux' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('petushok'),
            ),
        ).toEqual({ username: 'petushok' });
    });
    test('Проверка изменения поля password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
            state as LoginSchema,
            loginActions.setPassword('cococo'),
            ),
        ).toEqual({ password: 'cococo' });
    });
});
