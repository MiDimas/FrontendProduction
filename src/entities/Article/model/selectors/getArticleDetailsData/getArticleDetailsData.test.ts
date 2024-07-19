import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';
import { getArticleDetailsData } from './getArticleDetailsData';

const article: DeepPartial<Article> = {
    title: 'Статья',
};
describe('Тестирование селектора ArticleDetailsData', () => {
    test('Состояние ошибки', () => {
        const initialState: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article as Article,
            },
        };
        expect(getArticleDetailsData(initialState as StateSchema)).toEqual(article);
    });
    test('Пустой стэйт', () => {
        const initialState: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsData(initialState as StateSchema)).toBe(undefined);
    });
});
