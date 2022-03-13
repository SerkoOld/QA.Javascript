var bankAccountUrl = 'http://localhost:3000/bankaccounts';
var bankName = 'TestBank';
var routingNumber = '123123123';
var accountNumber = '123123123';

describe('Payment Tests', () => {
  it('Should be able to login with valid username and password', function () {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('#username').type(Cypress.env('username'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('[data-test=signin-submit]').click()
  });

  it('Should be able to add new bank account', () => {
    cy.get('[data-test="sidenav-bankaccounts"]').click();
    cy.get('[data-test="bankaccount-new"]').click();
    cy.get('#bankaccount-bankName-input').type(bankName);
    cy.get('#bankaccount-routingNumber-input').type(routingNumber);
    cy.get('#bankaccount-accountNumber-input').type(accountNumber);
    cy.get('[data-test="bankaccount-submit"]').click();
    cy.get('[data-test="bankaccount-list-item-pGCWNI-0O"]').contains(bankName)
  })  
})
