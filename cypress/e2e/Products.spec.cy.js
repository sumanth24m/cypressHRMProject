
let jsonData;
describe('Products Test Suite', () => {

    before(() => {
        cy.fixture('loginData').then((data) => {
            jsonData = data;
        })
    });
 
    it('Test case - Navigate to Products and Search Product', () => {
        cy.Login(jsonData.email, jsonData.password)
        cy.get('.nav-link').contains('Catalog').click({ force: true })
        cy.get('.nav-link').contains('Products').click({ force: true })
        cy.get('[name="SearchProductName"]').type('Build your own computer')
        cy.get('#search-products').click()
    });
});