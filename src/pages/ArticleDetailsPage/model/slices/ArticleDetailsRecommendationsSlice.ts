import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { Article, ArticleType } from 'entities/Article';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: ['1'],
        entities: {
            1: {
                id: '4',
                title: 'JavaScript News 2020',
                subtitle: 'Разберем JS в этом году',
                img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                views: 5433,
                createdAt: '15.07.2020',
                user: {
                    id: '1',
                    username: 'petux',
                },
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '7',
                        type: ArticleBlockType.TEXT,
                        title: 'Заголовок этого блока',
                        paragraphs: [
                            // eslint-disable-next-line max-len
                            'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                            // eslint-disable-next-line max-len
                            'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                        ],
                    },
                    {
                        id: '8',
                        type: ArticleBlockType.IMAGE,
                        // eslint-disable-next-line max-len
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Рисунок 1 - скриншот сайта',
                    },
                ],
            },
        },
    }),
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         })
    //         .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             commentsAdapter.setAll(state, action.payload);
    //         });
    // },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
