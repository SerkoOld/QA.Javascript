it('write your own test case', () => {
    browser.url('https://localhost:3000')
    expect(browser.getUrl()).toBe('https://localhost:3000');
})
