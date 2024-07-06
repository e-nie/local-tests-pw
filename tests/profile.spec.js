import { expect, test } from "../common/test";

//поменять в запросе значение confirmed на false, чтобы увидеть плашку об активации
test.describe("Profile", () => {
  test.beforeEach(async ({ loginPage, page }) => {
    await page.route("**/user/auth", async (route) => {
      const response = await route.fetch();
      const json = await response.json();
      json.payload.emailConfirmation.confirmed = false;
      json.payload.name = "It works!";
      json.payload.firstName = "It";
      json.payload.lastName = "Works!";
      await route.fulfill({ json });
    });

    await loginPage.open();
    await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD);
  });

  test("Email confirmation alert is visible", async ({ page, profilePage }) => {
    // await profilePage.alert.waitFor({ state: "hidden", timeout: 5000 });// ожидание плашки
    await page.waitForLoadState("networkidle"); // ожидание загрузки страницы, альтернатива ожиданию плашки
    await expect(profilePage.alert).toBeVisible();
  });
});
