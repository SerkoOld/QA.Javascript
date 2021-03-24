const { Builder, By, until } = require('selenium-webdriver')
require('chromedriver')
jest.setTimeout(30000)

var url = 'http://localhost:3000';
var username = 'Katharina_Bernier';
var password = 's3cret';
var builder = new Builder().forBrowser('chrome')
var driver = builder.build()

it('Should be able to login with valid user and make a payment', async () => {
    await driver.get(url)
    expect(await driver.getCurrentUrl()).toContain(url)
    await driver.findElement(By.id('username')).sendKeys(username)
    await driver.findElement(By.id('password')).sendKeys(password)
    await driver.findElement(By.css('[data-test=signin-submit]')).click()
    await driver.wait(until.elementLocated(By.css('[data-test="nav-top-new-transaction"]'), 10000))
    await driver.findElement(By.css('[data-test="nav-top-new-transaction"]')).click()
    await driver.findElement(By.css('[data-test="user-list-item-qywYp6hS0U"]')).click()
    await driver.findElement(By.id('amount')).sendKeys('100')
    await driver.findElement(By.id('transaction-create-description-input')).sendKeys('Testing')
    await driver.findElement(By.css('[data-test="transaction-create-submit-payment"]')).click()
})
