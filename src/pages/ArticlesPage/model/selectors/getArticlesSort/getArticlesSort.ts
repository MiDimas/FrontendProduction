import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort;
