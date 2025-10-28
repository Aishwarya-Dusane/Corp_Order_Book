/// <reference types="cypress" />

describe("XYZ Order Book App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders sell orders table with data", () => {
    cy.contains("Sell Orders").should("be.visible");
    cy.get("table tbody tr").should("have.length.at.least", 1);
    cy.get("table tbody tr")
      .first()
      .within(() => {
        cy.get("td").eq(0).should("not.be.empty");
        cy.get("td").eq(1).should("not.be.empty");
        cy.get("td").eq(2).should("not.be.empty");
      });
  });
});
