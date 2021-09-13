describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("render Food HQ link in header", () => {
    cy.get("a").contains("Food HQ");
  });
});
