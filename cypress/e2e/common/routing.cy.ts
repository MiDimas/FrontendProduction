describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Попытка открыть страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Переход на несуществующий маршрут', () => {
            cy.visit('/fsjdkfla');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/4');
            cy.getByTestId('ProfilePage').should('exist');
        });
        it('Переход на страницу статей', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
