class LoginPage {
    visit() {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    email(value) {
        const field = cy.get('[id=Email]')
        field.clear()
        field.type(value)
        return this
    }

    password(value) {
        const field = cy.get('[id=Password]')
        field.clear()
        field.type(value)
        return this
    }

    submitForm() {
        const button = cy.get('[type=submit]')
        button.click()
    }
}

export default LoginPage