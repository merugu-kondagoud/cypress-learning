export class LoginPage {
    getUserName() {
        return cy.get('input[name="userName"]');
    }

    getPassword() {
        return cy.get('input[name="password"]');
    }

    getSubmitButton() {
        return cy.contains('Submit');
    }

}