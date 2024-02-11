import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.fixture("orangeHRMCss.json").then((Object)=>{
        cy.get(Object.Username).should('be.visible', {timeout: 10000}).type(`${username}`)
        cy.get(Object.Password).should('be.visible', {timeout: 10000}).type(`${password}`)
    })
})

When('User clicks on login button', () => {
    cy.fixture("orangeHRMCss.json").then((Object)=>{
        cy.get(Object.LoginButton).should('be.visible', {timeout: 10000}).click()
    })
})

Then('User is able to successfully login to the Website', () => {

    cy.fixture("orangeHRMCss.json").then((Object)=>{
        cy.get(Object.Admin).should('be.visible', {timeout: 10000}).click()
    })
})
