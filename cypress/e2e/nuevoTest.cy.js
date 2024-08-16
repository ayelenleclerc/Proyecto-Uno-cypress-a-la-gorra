
describe('Prueba de Demoblaze', () => {
    it('Inicio de Demoblaze', () => {
        cy.visit('https://www.demoblaze.com/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#login2').click();
        cy.get('#loginusername').type('ayelenleclerc');
        cy.get('#loginpassword').type('123456');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
        
        cy.get('#nava').should('have.class', 'active');
        cy.get('#cat').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })
})

// it('prueba local', () => {
//     cy.visit('http://127.0.0.1:5500/index.html')
// })