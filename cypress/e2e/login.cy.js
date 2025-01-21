describe('Test Suite Login', () => {
    before(() => {
        cy.visit('https://www.demoblaze.com/');
    });
    it.skip('Test Case 1 - Access Url and ensure PRODUCT STORE and CATEGORIES are visible', () => {
        cy.wait(1000);
        cy.get('#nava').should('be.visible');
        cy.wait(1000);
        cy.get('#nava').should('contain.text', 'PRODUCT STORE');
        cy.get('#cat').should('be.visible');
        cy.get('#cat').should('contain.text', 'CATEGORIES');
    });

   it('Test Case 2 - Sign up with valid credentials', () => {
        const username = 'ablahu';
        const password = '12345678';
        Cypress.env('username', username);
        Cypress.env('password', password);

        cy.get('#signin2').click();
        cy.wait(1000);
        cy.get('#sign-username').type(username);
        cy.get('#sign-password').type(password);
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });

    it('Test Case 3 - Sign In with valid credentials', () => {
        cy.visit('https://www.demoblaze.com/');
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        // Debugging
        cy.log('Username: ' + username);
        cy.log('Password: ' + password);

        if (username && password) {
            cy.get('#login2', { timeout: 10000 }).should('be.visible').click();
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1)').should('be.visible');
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2)').should('be.visible');
            cy.wait(1000);
            cy.get('#loginusername').type(username);
            cy.get('#loginpassword').type(password);
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
            cy.wait(2000);
            cy.get('#nameofuser').should('contain.text', username);
        } else {
            throw new Error('Username or password is undefined');
        }
    });
});