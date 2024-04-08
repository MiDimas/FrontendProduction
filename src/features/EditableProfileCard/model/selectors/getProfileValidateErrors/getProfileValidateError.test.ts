import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/editableProfileCardConsts';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileReadonly', () => {
    test('Возвращаем состояние только для чтения', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [ValidateProfileError.SERVER_ERROR] },
        };
        expect(getProfileValidateError(state as StateSchema))
            .toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('Пустой стэйт и состояние для чтения', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toBe(undefined);
    });
});
