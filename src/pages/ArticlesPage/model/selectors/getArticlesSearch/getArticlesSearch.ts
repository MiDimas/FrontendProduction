import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search;
