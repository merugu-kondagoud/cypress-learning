/// <reference types="cypress" />
import { LoginPage } from "../../pages/LoginPage";
import {HomePage, Registration} from "../../pages/RegistrationPage"
describe('Register suite', ()=>{
    beforeEach(() => {
        cy.launchApplication();
    })
it('Register Test', () =>{
    const loginPage = new LoginPage();
    cy.fixture('login.json').then(function (loginDetails) {
        this.loginDetails = loginDetails;
        loginPage.login(loginDetails.userName, loginDetails.password)
    })
    const regPage = new Registration();
    regPage.clickOnRegisterLink();
})

})