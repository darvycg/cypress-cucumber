// @ts-check
import {DataTable, Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import Home from "../pages/Home";

Given("I am on the DemoQA website", () => {
    cy.visit("/");
});

Then("I should be able to see the links", (linkTable: DataTable) => {
    linkTable.hashes().forEach((text) => {
        Home.getLinksByText(text.linkText);
    })
});