import HomepageActions from '../../pageobjects/Test/qubikaHomepageObjects/qubika_homepage_actions'

const homepage = new HomepageActions()

describe('Qubika - Contact Us tests', () => {
  before(() => {
    homepage.goToHomepage()
  })
  it('Validate Contact us state preservation', () => {
    //Home page loads successfully
    homepage.verifyHomepageLoads()
    homepage.validateLogoIsDisplayed()

    //Validate "Contact us" button functionality
    homepage.clickContactUsBtn()
    homepage.verifyContactUsMNodalIsDisplayed()

    //Validate mandatory form fields are displayed
    homepage.firstNameFieldFormIsDisplayed()
    homepage.lastNameFieldFormIsDisplayed()
    homepage.emailFieldFormIsDisplayed()
    homepage.companyNameFieldFormIsDisplayed()
    homepage.submitFormBtnIsDisplayed()

    //Validate that all mandatory fields have an error message
    homepage.clickOnSubmitBtn()
    homepage.verifyErrorMessagesAreDisplayed()

    //Validate that all mandatory fields have an error message except the first name field
    homepage.fillFirstNameInput()
    homepage.clickOnSubmitBtn()
    homepage.verifyFirstNameErrorMessageIsNotDisplayed()
    homepage.verifyErrorMessagesAreDisplayedExceptFirstName()

    //Verify closed modal functionality
    homepage.closeContactUsModal()
    homepage.verifyContactUsModalIsClosed()

    //Validate that the form is displayed with the preview state: "The first name field" should be completed and the rest with error messages
    homepage.clickContactUsBtn()
    homepage.verifyFirstNameErrorMessageIsNotDisplayed()
    homepage.verifyErrorMessagesAreDisplayedExceptFirstName()
  })
})
