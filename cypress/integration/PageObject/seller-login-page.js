class SellerLoginPage{
    visit(url){
        cy.visit(url);
        return this;
    };
    fillEmailName(email){
        cy.get(`[name='email']`).as('email-text-box');
        cy.get('@email-text-box').type(email);
        return this;

    };
    fillPassword(password){
        cy.get(`[name='password']`).as('password-text-box');
        cy.get('@password-text-box').type(password);
        return this;
    };
    clickLoginButton(){
        cy.get(`[type='button']`).as('login-btn');
        cy.get("@login-btn").click();
        return this;
    };
    verifyLoginSucces(){
        cy.url().should('eq','https://seller.lionnix.com/');
    }
};
export default SellerLoginPage;