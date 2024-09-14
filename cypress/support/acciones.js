import elementos from '../fixtures/elementos.js'

Cypress.Commands.add('Login', () => {
    cy.get(elementos.login.user).type("Admin")
    cy.get(elementos.login.password).type("admin123")
    cy.get(elementos.login.boton).click()
})
