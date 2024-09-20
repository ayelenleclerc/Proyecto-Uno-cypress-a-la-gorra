/// <reference types="cypress" />


describe('Saucedemo', () => {
    before("Interceptar fetch y cargar pagina", () => {
        cy.intercept({ resourceType: /xhr | fetch / }, { log: false })
    })  
    beforeEach("cargar pagina",() => {
    cy.visit('https://www.saucedemo.com/')
    })
     it('login error de saucedemo', () => {
        cy.get("[data-test=username]").type("standard_user")
        cy.get("[data-test=password]").type("secret_sauce")
        cy.get("[data-test=login-button]").click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test=logout-sidebar-link]').click()
        cy.get('#root > div > div.login_logo').should('have.text', 'laboratorio')
         })
    })
