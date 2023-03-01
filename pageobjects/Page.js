class Page {
    constructor() {
        this.title = 'Cascade Loans'
    }

    async open (path) {
        await browser.url(path)
    }
}

module.exports = Page