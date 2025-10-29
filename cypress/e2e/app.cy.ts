/// <reference types="cypress" />

describe("XYZ Order Book App", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders the main page with all key sections", () => {
    cy.contains("XYZ Order Book").should("be.visible");
    cy.contains("Place Buy Order").should("be.visible");
    cy.get('input[type="radio"][value="quantity"]').should("exist");
    cy.get('input[type="radio"][value="total"]').should("exist");
    cy.get('input[type="number"]').should("exist");
    cy.contains("Submit Buy Order").should("exist");
    cy.contains("Sell Orders").should("be.visible");
  });

  it("switches between Quantity and Total Cost modes", () => {
    cy.get('input[value="quantity"]').should("be.checked");

    cy.get('input[value="total"]').check();
    cy.get('input[value="total"]').should("be.checked");
    cy.get('input[value="quantity"]').should("not.be.checked");
  });

  it("disables submit button when value is invalid and enables when valid", () => {
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get('input[type="number"]').type("-1");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get('input[type="number"]').clear();
    cy.get('input[type="number"]').type("5");
    cy.get('button[type="submit"]').should("not.be.disabled");
  });

  it("resets input and message when switching mode", () => {
    cy.get('input[type="number"]').type("10");
    cy.contains("Submit Buy Order").click();
    // cy.contains("Your order is successfully placed.").should("be.visible");
    cy.get('input[value="total"]').check();
    cy.get('input[type="number"]').should("have.value", "");
    cy.get("p").should("not.exist");
  });
});
