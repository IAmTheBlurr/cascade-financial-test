const Page = require('./page')

// noinspection JSCheckFunctionSignatures
class HomePage extends Page {
    // onboarding buttons with class "onboarding-btns"
    get buyHomeButton () { return $(("//div[@class='onboarding-btns']//a[1]")) }
    get refinanceButton () { return $(("//div[@class='onboarding-btns']//a[2]")) }

    async open() {
        await super.open('https://www.cascadeloans.com/')
    }

    async clickBuyHomeButton() {
        await this.buyHomeButton.click()
    }

    async clickRefinanceButton() {
        await this.refinanceButton.click()
    }
}

module.exports = new HomePage()