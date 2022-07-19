import { Login } from "../components/login"

describe('Demo HRM Login', () => {

  it('Test case for Login to HRM', () => {
    Login()
    cy.get('h1').should('contain', 'Dashboard')
  })

})