// esto es un comentario

//const { beforeEach } = require("mocha")

// hooks; es un conjunto de instrucciones que se ejecutan antes o despues de cada test o it.
// hooks: Describe, it, before, after, beforeEach, afterEach
// describe('template spec', () => { // Describe; es lo que engloba a un conjunto te test o its. Esto seria la suit
//   it('passes', () => { // it; es una prueba particular,o unitaria.
//     cy.visit('https://example.cypress.io')
//   })
// })

// atajo del teclado para comentar Ctrl+k+c para descomentar Ctrl+k+u

// function nombre(parametros) {
  
//   lo que hace la funcion
// }
// arrow funtion ()=>{}
//before: se ejecuta una vez antes de todos los tests
  //beforeEach: se ejecuta antes de cada test 

  
describe('Prueba de Demoblaze', () => { 
  beforeEach(() => {
   cy.visit('https://www.demoblaze.com/')  //cy.visit(); visita una url
  })
  it('Inicio de Demoblaze', () => { 
    cy.get('#login2').click();
    cy.get('#loginusername').type('Ayelen')
    cy.get('#loginpassword').type('12345')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    //cy.get('button').contains('Log in').click();
  })
})
