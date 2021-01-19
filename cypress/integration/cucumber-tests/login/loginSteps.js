import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
  // cy.visit('http://zero.webappsecurity.com/login.html')
  LoginPage.visit()
})

When('I submit login', () => {
  // cy.get('#user_login').type('username')
  // cy.get('#user_password').type('password')
  // cy.get('input[name="submit"]').type('username')
  LoginPage.fillUsername('username')
  LoginPage.fillPassword('password')
  LoginPage.submit()
})

Then('I should see homepage', () => {
  // cy.get('#account_activity_tab').should('be.visible')
  LoginPage.activity_account()
})
