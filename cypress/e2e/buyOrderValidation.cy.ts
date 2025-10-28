/// <reference types="cypress" />

describe("Buy Order Form Validation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows an error message when value is empty", () => {
    cy.contains("Submit Buy Order").click();
    cy.contains("Please enter a positive value.").should("be.visible");
  });

  it("shows an error message when value is 0", () => {
    cy.get('input[type="number"]').type("0");
    cy.contains("Submit Buy Order").click();
    cy.contains("Please enter a positive value.").should("be.visible");
  });

  it("shows an error message when value is negative", () => {
    cy.get('input[type="number"]').type("-5");
    cy.contains("Submit Buy Order").click();
    cy.contains("Please enter a positive value.").should("be.visible");
  });

  it("shows success message when value is greater than 0", () => {
    cy.get('input[type="number"]').type("10");
    cy.contains("Submit Buy Order").click();
    cy.contains("Your order is successfully placed.").should("be.visible");
  });
});
