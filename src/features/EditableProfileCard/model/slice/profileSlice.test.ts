import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/ProfileSchema';
import { profileAction, profileReducer } from './profileSlice';
import { fetchProfileData } from '../services/FetchProfileData/FetchProfileData';
import { updateProfileData } from '../services/UpdateProfileData/UpdateProfileData';

const data = {
    firstname: 'Peter',
    lastname: 'Parker',
    age: 25,
    username: 'spider',
    city: 'New-York',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};
describe('profileSlice', () => {
    test('Проверка изменения состояния readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileAction.setReadOnly(true),
        )).toEqual({ readonly: true });
    });
    test('Проверка отмены редактирования', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { ...data, firstname: '' },
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileAction.cancelEdit(),
        )).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
    test('Проверка обновления профиля', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileAction.updateProfile({
                ...data,
                username: 'spiderman',
            }),
        )).toEqual({
            form: {
                ...data,
                username: 'spiderman',
            },
        });
    });

    test('тестирование запроса даты с pending состоянием', () => {
        const state: DeepPartial<ProfileSchema> = {
            error: 'error',
            isLoading: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.pending,
        )).toEqual({ error: undefined, isLoading: true });
    });
    test('тестирование обновления даты с fulfilled состоянием', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            data,
            form: data,
        });
    });
});
