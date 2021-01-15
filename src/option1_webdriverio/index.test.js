it('should open login pages', () => {
    browser.url('http://localhost:3000')
    expect(browser.getUrl()).toContain('http://localhost:3000');
})
