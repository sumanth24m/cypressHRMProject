import { Login } from "../components/login";

describe('Quick links test suite', () => {
    before(() => {
        Login()
    })

    it('Test case for Quick links', () => {
        cy.get('.quickLinkText').contains('Assign Leave').click()
        cy.go('back')
        cy.get('.quickLinkText').contains('Leave List').click()
        cy.get('#menu_dashboard_index').should('contain', 'Dashboard').click()
    });

    it('Test case for logout', () => {
        cy.get('#welcome').click()
        cy.get('a[href*="/index.php/auth/logout"]').should('contain', 'Logout').click({force:true})
    })
});