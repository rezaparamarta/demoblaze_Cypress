describe('Test Suite Login', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });
    it('Test Case 1 - Access Url and ensure PRODUCT STORE and CATEGORIES are visible', () => {
        cy.wait(1000);
        cy.get('#nava').should('be.visible');
        cy.wait(1000);
        cy.get('#nava').should('contain.text', 'PRODUCT STORE');
        cy.get('#cat').should('be.visible');
        cy.get('#cat').should('contain.text', 'CATEGORIES');
    });

    it('Test Case 2 - Sign up with valid credentials', () => {
        cy.get('#signin2').click();
        cy.wait(1000);
        cy.get('#sign-username').type('ablahu');
        cy.get('#sign-password').type('12345678');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });

    it('Test Case 3 - Sign In with valid credentials but wrong password', () => {
        cy.get('#login2').click();
        cy.wait(1000);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1)').should('be.visible');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2)').should('be.visible');
        cy.get('#loginusername').type('ablahu');
        cy.get('#loginpassword').type('12345678');
        cy.wait(1000);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(2000);
        cy.get('#nameofuser').should('contain.text', 'ablahu');
    });
});