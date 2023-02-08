export class HomePage{
getHomePageMessage(){
    return cy.contains('Login Successfully');
}
}