const HomePage = require('../../pageobjects/home.page')

describe('Home Page', () => {
    it('should have expected elements', async () => {
        await HomePage.open()

        await expect(HomePage.buyHomeButton).toBeDisplayed()
        await expect(HomePage.buyHomeButton).toHaveTextContaining('Buy a Home')

        await expect(HomePage.refinanceButton).toBeDisplayed()
        await expect(HomePage.refinanceButton).toHaveTextContaining('Refinance')
    })

    it('should navigate to the correct page when clicking the Buy a Home button', async () => {
        await HomePage.open()
        await HomePage.clickBuyHomeButton()
        await expect(browser).toHaveUrl('https://www.cascadeloans.com/home-loan-onboarding/')
    })

    it('should navigate to the correct page when clicking the Refinance button', async () => {
        await HomePage.open()
        await HomePage.clickRefinanceButton()
        await expect(browser).toHaveUrl('https://www.cascadeloans.com/refinance-onboarding/')
    })
})