import { Login } from "../components/login";

describe('Quick links test suite', () => {
    beforeEach(() => {
        Login()
    })

    it('Test case for Quick links', () => {
        cy.get('.quickLinkText').contains('Assign Leave').click()
    });
});