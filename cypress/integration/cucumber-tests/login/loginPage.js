const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ACTIVITY_ACCOUNT_TAB = '#account_activity_tab'

class LoginPage {
  static visit() {
    cy.visit(URL)
  }

  static fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username)
  }

  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password)
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
  }

  static activity_account() {
    cy.get(ACTIVITY_ACCOUNT_TAB).should('be.exist').and('be.visible')
  }
}

export default LoginPage
