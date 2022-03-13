export class LoginPage{
    static loginUsername = '#username';
    static loginPassword = '#password';
    static loginButton = '[data-test=signin-submit]';

    constructor(){
        this.url= `${Cypress.env('baseUrl')}`;
    }

    visit(){
        cy.visit(this.url);
    }

    login(username, password){
        cy.get(LoginPage.loginUserName).type(username);
        cy.get(LoginPage.loginPassword).type(password, {log: false});
        cy.get(LoginPage.loginButton).click();
        
        return this;
    }
}