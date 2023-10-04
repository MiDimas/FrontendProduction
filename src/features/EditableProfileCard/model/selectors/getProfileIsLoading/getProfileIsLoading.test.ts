import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('Возвращаем состояние загрузки', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    test('Пустой стэйт и состояние загрузки', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
