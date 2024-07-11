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
    it('Проверка отправки комментария', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Проверка оценивания статьи', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'not bad');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
