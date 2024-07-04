describe('Страница списка статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('проверка наличия статей', () => {
        cy.getByTestId('Articles');
    });
});
