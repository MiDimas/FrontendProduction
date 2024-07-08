import type { Article } from '@/entities/Article';

const defaultArticle = {
    title: 'JavaScript News 2022',
    subtitle: 'Что нового в JS в этом году',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.10.2022',
    userId: '1',
    type: [
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'asdfsd' },
    body: article ?? defaultArticle,
}).then((resp) => resp.body);

export const removeArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asdfsd' },
});

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?:Article): Chainable<Article>
            removeArticle(articleId:string): Chainable<void>
        }
    }
}
