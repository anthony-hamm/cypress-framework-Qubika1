export default class AddressAndLocationsObjects {
  qubikaLogo() {
    return cy.get('.main-header .logo')
  }
  contactUsBtn() {
    return cy.get('.button').contains('Contact Us')
  }

  firstNameInputForm() {
    return cy.get('input[placeholder="First Name"]')
  }

  firstNameModuleForm() {
    return cy.get('.hs_firstname')
  }

  lastNameInputForm() {
    return cy.get('input[placeholder="Last Name"]')
  }

  emailInputForm() {
    return cy.get('input[placeholder="Email"]')
  }

  companyNameInputForm() {
    return cy.get('input[placeholder="Company name"]')
  }

  submitFormBtn() {
    return cy.get('input[type="submit"]')
  }

  firstNameErrorMessage() {
    return cy.get('.hs_firstname label.hs-error-msg').eq(0)
  }

  lastNameErrorMessage() {
    return cy.get('.hs_lastname .hs-error-msg').eq(0)
  }

  emailErrorMessage() {
    return cy.get('.hs_email .hs-error-msg').eq(0)
  }

  companyNameErrorMessage() {
    return cy.get('.hs_company .hs-error-msg').eq(0)
  }

  contactTypeErrorMessage() {
    return cy.get('.hs_contact_type label.hs-error-msg').eq(0)
  }

  commentErrorMessage() {
    return cy.get('.hs_message label.hs-error-msg').eq(0)
  }

  warningMessage() {
    return cy.get('.hs_error_rollup .hs-main-font-element')
  }

  closeIconModal() {
    return cy.get('.icon-x').eq(1)
  }
}
