const {Builder} = require('selenium-webdriver')
require('chromedriver')
jest.setTimeout(30000)

it('should open login pages', async () => {
    var builder = new Builder().forBrowser('chrome')
    var driver = builder.build()
    await driver.get('http://localhost:3000')

    expect(await driver.getCurrentUrl()).toContain('http://localhost:3000')
})
