import 'cypress-real-events';

describe('ejemplo1', () => {

// it("topic", () => {
//     cy.Ingresar_pagina()
//     cy.get('#navbarLightDropdownMenuLink').realHover()
//     cy.get('.navbar-nav > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').realClick();
// })
// it("contact", () => {
//     cy.Ingresar_pagina()
//     cy.get('#navbarLightDropdownMenuLink').realHover()
//     cy.esperar(2)
//     cy.get('.navbar-nav > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').realClick();
// })
    
    it("login OrageHRM", () => {
        cy.Ingresar_pagina2()
        cy.Login()

    })
})
