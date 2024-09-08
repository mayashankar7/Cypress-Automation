it("amazon", () => {
    cy.visit("https://www.amazon.in/")

    /* ==== Generated with Cypress Studio ==== */
    //cy.get('#twotabsearchtextbox').clear('h');
    cy.get('#twotabsearchtextbox').type('headphones');
    cy.get('#nav-search-submit-button').click();
    cy.get('#a-autoid-1-announce').click();
    cy.get('#nav-cart-count').click();
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
    /* ==== End Cypress Studio ==== */
})