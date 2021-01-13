const {Builder,By,Browser} = require('selenium-webdriver')
require('chromedriver')

jest.setTimeout(100000)

it('should open login page', async () => {
    let builder = new Builder().forBrowser('chrome')
    let driver = builder.build()
    await driver.get('https://localhost')

    expect(await driver.getCurrentUrl()).toBe('https://localhost')
    driver.quit()
})

it('should login with valid credentials', async () => {
    let builder = new Builder().forBrowser('chrome')
    let driver = builder.build()
    await driver.get('https://localhost')

    let login = '#uniqueId'
    let password = 'password'
    let usernameValue = "testuser" //todo ask the interviewer for a value
    let passwordValue = "testpass" //todo ask the interviewer for a value

    await driver.findElement(By.css(login)).sendKeys(usernameValue)
    await driver.findElement(By.css(password)).sendKeys(passwordValue)
    //todo click login button
    driver.quit()
})

