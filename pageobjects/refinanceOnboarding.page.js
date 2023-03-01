const Page = require('./Page')

// noinspection JSCheckFunctionSignatures
class RefinanceOnboardingPage extends Page {
    // next button
    get nextButton () { return $(('(//input[@class="gform_next_button button"])[1]')) }
    get question1 () { return $(('//div[contains(text(), "How were you referred to Cascade?")]')) }
    get optionsDropdown1 () { return $(('(//select[@class="large gfield_select"])[1]')) }
    get progressPercentage () { return $(('//div[contains(@class,"gf_progressbar_percentage percentbar_blue")]/span')) }

    get homeTypesHelper () { return $(('//a[contains(text(), "Learn about Home Types")]')) }
    get manufacturedHomeButton() { return $(('//label[@for="choice_3_1_0"]')) }
    get modularHomeButton() { return $(('//label[@for="choice_3_1_1"]')) }
    get multiFamilyHomeButton() { return $(('//label[@for="choice_3_1_2"]')) }
    get singleFamilyHomeButton() { return $(('//label[@for="choice_3_1_3"]')) }

    async open() {
        await super.open('https://www.cascadeloans.com/refinance-onboarding/')
    }
}

module.exports = new RefinanceOnboardingPage()