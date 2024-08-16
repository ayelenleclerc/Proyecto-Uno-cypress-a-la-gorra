/// <reference types="cypress" />


describe('Saucedemo', () => {
    let datosError
    let datosCorrectos

    before("Interceptar fetch y cargar pagina", () => {
    cy.intercept({ resourceType: /xhr | fetch / }, { log: false })
    })

    before("Traer datos  de fixture", () => {
        cy.fixture('./mock-data') // como un fetch, pedimos los datos
            .then(data => {           //cuando traigas la info, guardala en la variable
                     datosError = data
            })
        
        cy.fixture('./datos_ok').then(data_ok => {
             datosCorrectos = data_ok
        })
    })
    beforeEach("Interceptar fetch y cargar pagina",() => {
    cy.visit('https://www.saucedemo.com/')
    
    })

    it('error de saucedemo', () => {
        datosError.forEach(credencial => {
        cy.get("[data-test=username]").clear().type(credencial.username)
        cy.get("[data-test=password]").clear().type(credencial.password)
        cy.get("[data-test=login-button]").click()
        })
        
    })
    
    it('login ok de saucedemo', () => {
         datosCorrectos.forEach(credencial => {
        cy.get("[data-test=username]").type(credencial.username)
        cy.get("[data-test=password]").type(credencial.password)
        cy.get("[data-test=login-button]").click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test=logout-sidebar-link]').click()
         })
    })
})