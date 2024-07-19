describe('Страница списка статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('проверка наличия статей', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('Пример заскипанного запроса', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.get('ashdjdaf').should('exist');
    });
    it('Проверка подгрузки на стабах(фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', {
            fixture: 'articles.json',
        });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    });
});
