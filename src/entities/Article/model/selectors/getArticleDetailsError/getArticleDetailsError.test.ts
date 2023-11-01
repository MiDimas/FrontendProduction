import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsError,
} from './getArticleDetailsError';

describe('Тестирование селектора ArticleDetailsError', () => {
    test('Состояние ошибки', () => {
        const initialState: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'Ошибка',
            },
        };
        expect(getArticleDetailsError(initialState as StateSchema)).toBe('Ошибка');
    });
    test('Пустой стэйт', () => {
        const initialState: DeepPartial<StateSchema> = {
            articleDetails: {
            },
        };
        expect(getArticleDetailsError(initialState as StateSchema)).toBe(undefined);
    });
});
