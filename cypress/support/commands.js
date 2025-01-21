Cypress.Commands.add('nava', () => {
    cy.get('#nava').should('be.visible');
    cy.get('#nava').should('contain.text', 'PRODUCT STORE');
    cy.get('#cat').should('be.visible');
    cy.get('#cat').should('contain.text', 'CATEGORIES');
});

Cypress.Commands.add('SignIn', () => {
    cy.get('#login2', { timeout: 10000 }).should('be.visible').click();
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1)').should('be.visible');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2)').should('be.visible');
});

Cypress.Commands.add('typeCredentials', (username, password) => {    
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
});

Cypress.Commands.add('validateLogin', (username) => {
    cy.get('#nameofuser').should('contain.text', username);
});





