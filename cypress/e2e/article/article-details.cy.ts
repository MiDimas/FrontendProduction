let currentArticle = '';
describe('', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticle = article.id;
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticle);
    });
});
