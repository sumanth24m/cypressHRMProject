import { Login } from "../components/login";

describe('Admin Test Suite', () => {
    
    before(() => {
        Login()
    });

    it('Test case for Visit Admin Page', () => {
        cy.get('#mainMenuFirstLevelUnorderedList').contains('Admin').click()
    })

    it('Test case for Serch', () => {
        cy.get('#searchSystemUser_userName').type('Alexa01')
        cy.get('select#searchSystemUser_userType').select('ESS')
        cy.get('#searchBtn').click()
    })
});