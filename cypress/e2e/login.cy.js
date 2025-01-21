import Sign_loginPage from '../support/pageObject/Sign_loginPage';

describe('Test Suite Login', () => {
    before(() => {
        cy.visit('');
    });
    it('Test Case 1 - Access Url and ensure PRODUCT STORE and CATEGORIES are visible', () => {
        cy.wait(1000);
        cy.nava();
        cy.wait(1000);
    });

   it('Test Case 2 - Sign up with valid credentials', () => {
        cy.visit('');
        const username = 'ablahu';
        const password = '12345678';
        Cypress.env('username', username);
        Cypress.env('password', password);

        Sign_loginPage.createAccount();
    });

    it('Test Case 3 - Sign In with valid credentials', () => {
        cy.visit('');
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        if (username && password) {
            cy.SignIn();
            cy.wait(1000);
            cy.typeCredentials(username, password);
            //cy.wait(2000);
            cy.validateLogin(username);
        } else {
            throw new Error('Username or password is undefined');
        }
    });
});

