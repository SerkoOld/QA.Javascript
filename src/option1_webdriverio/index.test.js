it('write your own test case', () => {
    browser.url('https://webdriver.io')
    expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
})
