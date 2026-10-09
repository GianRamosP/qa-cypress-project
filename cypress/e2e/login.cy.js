import LoginPage from "../pages/LoginPage";

describe("Login", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("debería mostrar un error cuando las credenciales son incorrectas", () => {
    loginPage.login("usuarioIncorrecto", "SuperSecretPassword!");
    loginPage.verifyError("Your username is invalid");
  });

  it("debería iniciar sesión con credenciales válidas", () => {
    loginPage.login("tomsmith", "SuperSecretPassword!");
    loginPage.verifySuccessfulLogin();
  });

  it("debería rechazar un usuario incorrecto", () => {
    loginPage.login("usuarioIncorrecto", "SuperSecretPassword!");
    loginPage.verifyError("Your username is invalid");
  });

  it("debería rechazar una contraseña incorrecta", () => {
    loginPage.login("tomsmith", "passwordIncorrecta");
    loginPage.verifyError("Your password is invalid");
  });

  it("debería mostrar un error al enviar campos vacíos", () => {
    loginPage.clickLogin();

    loginPage.verifyError("Your username is invalid!");
  });

  it("debería permitir iniciar sesión presionando Enter", () => {
    loginPage.typeUsername("tomsmith");
    loginPage.typePassword("SuperSecretPassword!");
    cy.get("#password").type("{enter}");

    loginPage.verifySuccessfulLogin();
  });
});
