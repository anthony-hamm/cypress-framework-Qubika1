import HomepageObjects from './qubika_homepage_objects'
import {common} from '../../../support/commonPageElements'
const Common = new common()
const objects = new HomepageObjects()

const url = 'https://qubika.com/'
const header = 'We create global impact through high-quality digital solutions'
const contactUsMNodalHeader = 'Contact Us'

const errorMessage1 = 'Please complete this required field.'
const errorMessage2 = 'Please complete all required fields.'
const firstName = 'Test name'

export default class HomepageActions {
  goToHomepage() {
    cy.visit(url)
    cy.url().should('eq', url)
  }

  verifyHomepageLoads() {
    Common.h1Text().contains(header).should('be.visible')
  }

  clickStartFreeTrialBtn() {
    objects.startFreeTrialBtn().should('be.visible')
    objects.startFreeTrialBtn().click()
  }

  validateLogoIsDisplayed() {
    objects.qubikaLogo().should('be.visible')
  }

  clickContactUsBtn() {
    objects.contactUsBtn().click()
  }

  verifyContactUsMNodalIsDisplayed() {
    Common.h4Text().contains(contactUsMNodalHeader).should('be.visible')
  }

  firstNameFieldFormIsDisplayed() {
    objects.firstNameInputForm().should('be.visible')
  }

  lastNameFieldFormIsDisplayed() {
    objects.lastNameInputForm().should('be.visible')
  }

  emailFieldFormIsDisplayed() {
    objects.emailInputForm().should('be.visible')
  }

  companyNameFieldFormIsDisplayed() {
    objects.companyNameInputForm().should('be.visible')
  }

  submitFormBtnIsDisplayed() {
    objects.submitFormBtn().should('be.visible')
  }

  clickOnSubmitBtn() {
    objects.submitFormBtn().click()
  }

  verifyErrorMessagesAreDisplayed() {
    objects.firstNameErrorMessage().should('have.text', errorMessage1)
    objects.lastNameErrorMessage().should('have.text', errorMessage1)
    objects.emailErrorMessage().should('have.text', errorMessage1)
    objects.companyNameErrorMessage().should('have.text', errorMessage1)
    objects.contactTypeErrorMessage().should('have.text', errorMessage1)
    objects.commentErrorMessage().should('have.text', errorMessage1)
    objects.warningMessage().should('have.text', errorMessage2)
  }

  fillFirstNameInput() {
    objects.firstNameInputForm().type(firstName)
  }

  verifyFirstNameErrorMessageIsNotDisplayed() {
    objects.firstNameModuleForm().should('not.contain', errorMessage1)
  }

  verifyErrorMessagesAreDisplayedExceptFirstName() {
    objects.lastNameErrorMessage().should('have.text', errorMessage1)
    objects.emailErrorMessage().should('have.text', errorMessage1)
    objects.companyNameErrorMessage().should('have.text', errorMessage1)
    objects.contactTypeErrorMessage().should('have.text', errorMessage1)
    objects.commentErrorMessage().should('have.text', errorMessage1)
  }

  closeContactUsModal() {
    objects.closeIconModal().click()
  }

  verifyContactUsModalIsClosed() {
    objects.closeIconModal().should('not.be.visible')
  }
}
