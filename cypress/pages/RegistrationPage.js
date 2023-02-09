export class Registration{
getRegisterLink(){
    return cy.contains('REGISTER');
}

clickOnRegisterLink(){
    this.getRegisterLink().click();
}
}