let currentArticle = '';
describe('Страница деталей статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticle = article.id;
            cy.visit(`/articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticle);
    });
    it('Проверка подгрузки  деталей статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Проверка наличия рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    });
});
