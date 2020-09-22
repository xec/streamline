describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains(".eightiesDigitalSunset", "100% handcrafted pure css");
  });

  it("navigates to /about", () => {
    cy.get("nav a").contains("About").click();
    cy.url().should("include", "/about");
  });

  it("navigates to /counter", () => {
    cy.get("nav a").contains("Counter").click();
    cy.url().should("include", "/counter");
  });
});
