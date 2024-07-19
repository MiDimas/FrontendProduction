import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/config/tests/renderWithTranslation/renderComponent';

const USER_ID = '1';
describe('EditableProfileCard.cy.tsx', () => {
    it('тестирование отрисовки карточки профиля', () => {
        cy.intercept('GET', '**/profile/*', {
            fixture: 'profile.json',
        });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestProvider>,
        );
    });
});
