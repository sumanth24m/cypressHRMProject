export function Login() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#divUsername').should('exist').type('Admin')
    cy.get('#divPassword').should('exist').type('admin123')
    cy.get('#btnLogin').should('contain', 'LOGIN').click()
}