Cypress.Commands.add('Ingresar_pagina', () => { 
     cy.visit("https://institutoweb.com.ar/ejemplo1/index.html")
})
  
Cypress.Commands.add('Ingresar_pagina2', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 })

Cypress.Commands.add('esperar', (tiempo) => {
    cy.wait(tiempo*1000)
})
