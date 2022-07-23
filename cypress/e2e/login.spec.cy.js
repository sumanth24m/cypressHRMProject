import LoginPage from "./PageObjects/Login";

let jsonData;
describe('Demo HRM Login', () => {

  before(() => {
    cy.fixture('loginData').then((data) => {
      jsonData = data;
    })
  });

  it('Test case for Login to HRM', () => {
    const lp = new LoginPage()
    lp.visit()
    lp.email(jsonData.email)
    lp.password(jsonData.password)
    lp.submitForm()

    // This commond is from commonds.js
    // cy.Login(jsonData.email, jsonData.password)
    
    cy.get('h1').should('contain', 'Dashboard')
  })

})