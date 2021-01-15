it('write your own test case', () => {
    browser.url('http://localhost:3000')
    expect(browser.getUrl()).toContain('http://localhost:3000');
})
