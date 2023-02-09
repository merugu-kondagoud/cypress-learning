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

login(userName, password){
    this.getUserName().type(userName);
    this.getPassword().type(password);
    this.getSubmitButton().click();
}

}