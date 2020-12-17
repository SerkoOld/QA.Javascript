export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    open(path) {
        console.debug('innnnnn');
        browser.url(path)
    }
}