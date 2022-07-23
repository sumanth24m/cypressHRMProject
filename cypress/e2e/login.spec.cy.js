let jsonData;
describe('Login Test Suite', () => {

  before(() => {
    cy.fixture('loginData').then((data) => {
      jsonData = data;
    })
  });

  it('Test case for Login', () => {
    
    // This custom commond is from commands.js
    cy.Login(jsonData.email, jsonData.password)
    cy.get('h1').should('contain', 'Dashboard')
  })

})