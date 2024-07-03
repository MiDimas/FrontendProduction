describe('Тестирование карточки профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
        });
    });
    it('Карточка профиля успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
});
