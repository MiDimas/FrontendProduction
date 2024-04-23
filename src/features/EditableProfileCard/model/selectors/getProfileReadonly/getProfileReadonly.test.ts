import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('Возвращаем состояние только для чтения', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: true },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
    test('Пустой стэйт и состояние для чтения', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
