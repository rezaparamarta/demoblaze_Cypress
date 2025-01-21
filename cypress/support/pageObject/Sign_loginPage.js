class Sign_loginPage {
    siginIn = '#signin2';


    createAccount() {
        cy.get(this.siginIn).click();
        cy.wait(3000);
        cy.get('#sign-username').type('ablahu');
        cy.get('#sign-password').type('12345678');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    }


}

module.exports = new Sign_loginPage();







