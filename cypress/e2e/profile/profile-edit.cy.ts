let userId = '';
describe('Тестирование карточки профиля', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
            userId = data.id;
        });
    });
    afterEach(() => {
        cy.resetProfile(userId);
    });
    it('Карточка профиля успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('Редактирование имени и фамилии', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
        const newName = 'new';
        const newLastName = 'lastname';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
    it('Изменение страны', () => {
        cy.getByTestId('ProfileCard.country').should('have.value', 'Ukraine');
    });
});
