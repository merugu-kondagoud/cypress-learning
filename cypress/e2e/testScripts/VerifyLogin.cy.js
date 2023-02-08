/// <reference types="cypress" />
import { LoginPage } from "../../pages/LoginPage";
import {HomePage} from "../../pages/HomePage"
describe('Login Test Suite', () => {
    
    beforeEach(() => {
        cy.launchApplication();
    })

    it('VerifyLogin', () => {
        const loginPage = new LoginPage();
        cy.fixture('login.json').then(function (loginDetails) {
            this.loginDetails = loginDetails;

            loginPage.getUserName().type(loginDetails.userName)
            loginPage.getPassword().type(loginDetails.password)
            loginPage.getSubmitButton().click()

        })
        const homePage = new HomePage();
        homePage.getHomePageMessage().should('have.text', 'Login Successfully')
})

})