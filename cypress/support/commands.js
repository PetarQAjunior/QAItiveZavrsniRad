import { loginPage } from '../support/POM/loginPage';

Cypress.Commands.add('login',(email,password) => {
        cy.visit('/index.php?route=account/login')
        cy.get(loginPage.emailField,{settimeout: 10000}).type(email)
        cy.get(loginPage.passwordField).type(password)
        cy.get(loginPage.loginButton).click()
})