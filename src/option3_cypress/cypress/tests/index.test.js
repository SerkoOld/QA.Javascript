var url = 'http://localhost:3000';
var username = 'Katharina_Bernier';
var password = 's3cret';

it('Should be able to login with valid username and password', function () {
  cy.visit(url)
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('[data-test=signin-submit]').click()
});

it('Should be able to make a new payment', () => {
  cy.get('[data-test="nav-top-new-transaction"]').click();
  cy.get('[data-test="user-list-item-qywYp6hS0U"]').click();
  cy.get('#amount').type('100');
  cy.get('#transaction-create-description-input').type('Testing');
  cy.get('[data-test="transaction-create-submit-payment"]').click();
})
