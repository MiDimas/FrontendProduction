import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';

import { ProfileSchema } from '@/features/EditableProfileCard';
import { ArticleDetailsSchema } from '@/entities/Article';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollRestoreSchema } from '@/features/ScrollRestore';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollRestore: ScrollRestoreSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManger extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<R> {
    rejectValue: R,
    extra: ThunkExtraArg,
    state: StateSchema,
}
