import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
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
                    avatar: 'https://png.pngtree.com/png-vector/20200615/ourmid/pngtree-hacker-wearing-hoodie-and-using-laptop-computer-freak-hacking-and-malware-png-image_2256760.jpg',
                },
            },
        },
    }),
    reducers: {},
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
