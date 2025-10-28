/// <reference types="cypress" />

describe("XYZ Order Book App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the main page", () => {
    cy.contains("XYZ Order Book").should("be.visible");
    cy.contains("Place Buy Order").should("be.visible");
    cy.get('input[type="radio"][value="quantity"]').should("exist");
    cy.get('input[type="radio"][value="total"]').should("exist");
    cy.get('input[type="number"]').should("exist");
    cy.contains("Submit Buy Order").should("exist");
    cy.contains("Sell Orders").should("be.visible");
  });
});
