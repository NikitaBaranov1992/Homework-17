export class LoginPage {
  elements = {
    loginField: () => cy.get(":nth-child(3) > .frm"),
    passwordField: () => cy.get(":nth-child(4) > .frm"),
    loginButton: () => cy.get(".btn-main"),
    loginClick: () => cy.contains("Вход и регистрация"),
    newPass: () => cy.get(".layout-column-start > :nth-child(1) > .frm"),
    newPassReturn: () =>
      cy.get(
        ":nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm"
      ),
    newPassButton: () => cy.get(".layout-row-end > .btn-service").click(),
  };

  login(login, password) {
    this.elements.loginField().type(login);
    this.elements.passwordField().type(password);
    this.elements.loginButton().click();
  }

  clickLogin() {
    this.elements.loginClick().click({ force: true });
  }

  passwordChange(userName, password) {
    cy.contains(userName).click({ force: true });
    this.elements.newPass().type(password);
    this.elements.newPassReturn().type(password);
    this.elements.newPassButton().click();
  }
}
