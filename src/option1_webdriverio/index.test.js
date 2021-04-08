var url = 'http://localhost:3000';
var username = 'Katharina_Bernier';
var password = 's3cret';

// TODO: Complete the Login and Payment flow tests
it('Should be able to login with valid username and password', () => {
    browser.url(url);
    expect(browser.getUrl()).toContain(url);
    $('#username').setValue(username);
    $('#password').setValue(password);
    $('[data-test=signin-submit]').click();
})

it('Should be able to make a new payment', () => {
    $('[data-test="nav-top-new-transaction"]').click();
    $('[data-test="user-list-item-qywYp6hS0U"]').click();
    $('#amount').setValue(100);
    $('#transaction-create-description-input').setValue('Testing');
    $('[data-test="transaction-create-submit-payment"]').click();
})
