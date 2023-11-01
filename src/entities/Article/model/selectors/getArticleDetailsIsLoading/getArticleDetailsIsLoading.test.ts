import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsIsLoading,
} from './getArticleDetailsIsLoading';

describe('Тестирование селектора ArticleDetailsIsLoading', () => {
    test('Состояние загрузки true', () => {
        const initialState: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(initialState as StateSchema)).toBe(true);
    });
    test('Пустой стэйт', () => {
        const initialState: DeepPartial<StateSchema> = {
            articleDetails: {
            },
        };
        expect(getArticleDetailsIsLoading(initialState as StateSchema)).toBe(undefined);
    });
});
