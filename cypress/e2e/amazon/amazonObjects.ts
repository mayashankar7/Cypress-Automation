class amazonObjects{
    amazonLogin(){
        cy.visit("https://www.amazon.in/")
    }
    pageAssertions(){
        cy.get("#nav-logo-sprites")
            .should('be.visible')
        cy.get("#nav-link-accountList")
            .contains("Hello, sign in")
            .should('be.visible')
        cy.get("#nav-cart")
            .should('be.visible')
        cy.get('#nav-orders')
            .should('be.visible')
        // cy.get('#searchDropdownBox')
        //     .should('be.visible')
        //     .should('be.enabled')
    }
    search(product_name){
        cy.get("#twotabsearchtextbox").type(product_name)
        cy.get("#nav-search-submit-button").click()
        cy.get("[data-cel-widget='search_result_3']").click()
        cy.get("add-to-cart-button").should('be.visible').click()

    }
}
export default amazonObjects