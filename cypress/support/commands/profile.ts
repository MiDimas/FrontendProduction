export const updateProfile = (firstname: string = 'new', lastname: string = 'lastname') => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(`${firstname}`);
    cy.getByTestId('ProfileCard.lastname').clear().type(`${lastname}`);
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asdfsd' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'test',
            age: 30,
            currency: 'USD',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            // eslint-disable-next-line max-len
            avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname?: string, lastname?: string): Chainable<void>
            resetProfile(profileId:string): Chainable<void>
        }
    }
}
