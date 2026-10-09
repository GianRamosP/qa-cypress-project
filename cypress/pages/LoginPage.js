class LoginPage {
  visit() {
    cy.visit("https://the-internet.herokuapp.com/login");
  }

  typeUsername(username) {
    cy.get("#username").type(username);
  }

  typePassword(password) {
    cy.get("#password").type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  verifyError(message) {
    cy.get("#flash").should("be.visible").and("contain", message);
  }

  verifySuccessfulLogin() {
    cy.url().should("include", "/secure");

    cy.get("#flash")
      .should("be.visible")
      .and("contain", "You logged into a secure area!");
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
