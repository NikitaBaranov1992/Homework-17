import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/loginPage";

describe("santa login - UI", () => {
  it("user cannot login with old password", () => {
    let loginPage = new LoginPage();
    let oldPassword = "GoodPassword10";
    let newPassword = faker.internet.password(8);
    cy.log(newPassword);

    cy.visit("https://santa-secret.ru");
    loginPage.clickLogin();
    loginPage.login("4932843+1@gmail.com", oldPassword);
    cy.contains("Коробки").should("exist");
    loginPage.passwordChange("Никита Баранов", newPassword);

    cy.contains("Выйти с сайта").click();
    cy.visit("https://santa-secret.ru");
    loginPage.clickLogin();
    loginPage.login("4932843+1@gmail.com", oldPassword);
    cy.contains("Неверное имя пользователя или пароль").should("exist");

    cy.get(":nth-child(4) > .frm").clear().type(newPassword);
    cy.get(".btn-main").click();
    loginPage.passwordChange("Никита Баранов", oldPassword);
  });
});
