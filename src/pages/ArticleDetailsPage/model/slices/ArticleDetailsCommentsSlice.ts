import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {
            1: {
                id: '1',
                text: 'Это че такое?',
                user: {
                    id: '1',
                    username: 'Димооооон',
                    // eslint-disable-next-line max-len
                    avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
                },
            },
            2: {
                id: '2',
                text: 'Комментарий это',
                user: {
                    id: '2',
                    username: 'Димасина',
                    // eslint-disable-next-line max-len
                    avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
                },
            },
        },
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
