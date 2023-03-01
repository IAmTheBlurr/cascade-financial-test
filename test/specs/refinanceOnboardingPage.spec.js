const refinanceOnboardingPage = require('../../pageobjects/refinanceOnboarding.page')

describe('Refinance Onboarding Page', () => {
    it('should have expected elements', async () => {
        await refinanceOnboardingPage.open()

        await expect(refinanceOnboardingPage.progressPercentage).toHaveTextContaining('9%')
        await expect(refinanceOnboardingPage.nextButton).toBeDisplayed()
        await expect(refinanceOnboardingPage.question1).toBeDisplayed()
        await expect(refinanceOnboardingPage.optionsDropdown1).toBeDisplayed()
        await expect(refinanceOnboardingPage.optionsDropdown1).toHaveTextContaining('Select one')

        await refinanceOnboardingPage.optionsDropdown1.click()

        // dropdown has option "Current Customer"
        await expect(refinanceOnboardingPage.optionsDropdown1).toHaveTextContaining('Current Customer')
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Current Customer')
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Friend or Family')
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Direct Mail')
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Search (Google, etc.)')
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Online Ad')
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Facebook')
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('YouTube')
    })

    it('should take the user to question 2 when selecting "Current Customer"', async () => {
        await refinanceOnboardingPage.open()
        await expect(refinanceOnboardingPage.optionsDropdown1).toBeDisplayed()
        await refinanceOnboardingPage.optionsDropdown1.click()
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Current Customer')

        await expect(refinanceOnboardingPage.progressPercentage).toHaveTextContaining('18%')
        await expect(refinanceOnboardingPage.homeTypesHelper).toBeDisplayed()
        await expect(refinanceOnboardingPage.manufacturedHomeButton).toBeDisplayed()
        await expect(refinanceOnboardingPage.modularHomeButton).toBeDisplayed()
        await expect(refinanceOnboardingPage.multiFamilyHomeButton).toBeDisplayed()
        await expect(refinanceOnboardingPage.singleFamilyHomeButton).toBeDisplayed()
    })

    it('should take the user to question 3 when selecting the "Manufactured Home" button', async () => {
        await refinanceOnboardingPage.open()
        await expect(refinanceOnboardingPage.optionsDropdown1).toBeDisplayed()
        await refinanceOnboardingPage.optionsDropdown1.click()
        await refinanceOnboardingPage.optionsDropdown1.selectByVisibleText('Current Customer')
        await expect(refinanceOnboardingPage.manufacturedHomeButton).toBeDisplayed()
        await refinanceOnboardingPage.manufacturedHomeButton.click()
        await expect(refinanceOnboardingPage.progressPercentage).toHaveTextContaining('25%')
    })
})