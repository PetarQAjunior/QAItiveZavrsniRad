import { navigationBar, header } from '../support/POM/homePage';
import { loginPage } from '../support/POM/loginPage';
import { searchPage } from '../support/POM/searchPage';
import { myAccountPage } from '../support/POM/myAccountPage';

describe('Search function Tests', () => {

    beforeEach('Visit url and login', () => {
        cy.visit('/')
        cy.get(navigationBar.myAccountButton).click()
        cy.url().should('include', '/index.php?route=account/login')
        cy.get(loginPage.emailField).type('bobanrajovic@011.rs')
        cy.get(loginPage.passwordField).type('usnebojevina123')
        cy.get(loginPage.loginButton).click()
      })
    afterEach('Logout', () => {
        cy.get(navigationBar.myAccountButton).click()
        cy.get(myAccountPage.logoutButton).click()
      })

it('Valid Search test', () => {
        cy.get(header.searchBar).type('Samsung Galaxy')
        cy.get(header.searchIcon).click()
        cy.url().should('include', '/index.php?route=product%2Fsearch&search=')
        cy.get(searchPage.showProductDropdown).select('100')
        cy.get(searchPage.searchResults).each(($ele) => {
            if($ele.text().trim().includes('Sam')){
              expect($ele.text().trim()).to.include('Samsung Galaxy')
            }
          })
    })
    it('Invalid Search test', () => {
        cy.get(header.searchBar).type('Burek sa mesom')
        cy.get(header.searchIcon).click()
        cy.url().should('include', '/index.php?route=product%2Fsearch&search=')
        cy.get(searchPage.noResultMessage).should('have.text', 'There is no product that matches the search criteria.')
    })
    it('Partial Search test', () => {
        cy.get(header.searchBar).type('sam')
        cy.get(header.searchIcon).click()
        cy.url().should('include', '/index.php?route=product%2Fsearch&search=')
        cy.get(searchPage.searchResults).each(($ele) => {
            if($ele.text().trim().includes('Sam')){
              expect($ele.text().trim()).to.include('Sam')
            }
          })
    })
})
