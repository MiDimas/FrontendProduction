export const setRate = (starsCount: number = 5, feedback: string = 'feedback') => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Button.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount?: number, feedback?: string): Chainable<void>;
        }
    }
}
