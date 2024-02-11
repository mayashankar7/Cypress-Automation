import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import amazonObjects from "./amazonObjects";
const amazon = new amazonObjects();
const product_name="Mobile";
Given('User is at the Amazon homepage', () => {
    amazon.amazonLogin()
    amazon.pageAssertions()
})

When('User search for any product', (username, password) => {
    amazon.search(product_name)
})

When('User clicks on login button', () => {

})

Then('User is able to successfully login to the Website', () => {

})