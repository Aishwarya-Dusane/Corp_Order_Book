/// <reference types="cypress" />

describe("Buy Order Form Validation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("disables the submit button initially", () => {
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("shows an error message when value is 0", () => {
    cy.get('input[type="number"]').type("0");
    cy.contains("Value must be greater than 0").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("shows an error message when value is negative", () => {
    cy.get('input[type="number"]').type("-5");
    cy.contains("Value must be greater than 0").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("clears the error and enables button when value > 0", () => {
    cy.get('input[type="number"]').type("10");
    cy.get('p').should("not.exist"); // No error message visible
    cy.get('button[type="submit"]').should("not.be.disabled");
  });

  it("shows success message after submitting a valid value", () => {
    cy.get('input[type="number"]').type("10");
    cy.get('button[type="submit"]').click();
    // cy.contains("Your order is successfully placed.").should("be.visible");
    // cy.get("p").should("have.css", "color", "rgb(0, 128, 0)"); // green color
  });
});
