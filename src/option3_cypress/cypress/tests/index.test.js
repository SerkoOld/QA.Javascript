describe('Payment Tests', () => {
  it('Should be able to login with valid username and password', function () {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('#username').type(Cypress.env('username'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('[data-test=signin-submit]').click()
  });

  it('Should be able to make a new payment', () => {
    cy.get('[data-test="nav-top-new-transaction"]').click();
    cy.get('[data-test="user-list-item-qywYp6hS0U"]').click();
    cy.get('#amount').type('100');
    cy.get('#transaction-create-description-input').type('Testing');
    cy.get('[data-test="transaction-create-submit-payment"]').click();
  })
})
