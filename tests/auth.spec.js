import { test, expect } from "../common/test";

test.describe("Authentication & Authorization ", () => {
  test.beforeEach(async ({ loginPage }) => {
    // await page.goto('/user/login');

    await loginPage.open();
  });

  //we do not use login method from login.js, because we want to test.js each step separately - for more clarity/obviousness
  test("Sign in with existing credentials", async ({ page, loginPage }) => {
    await loginPage.input.email.fill(process.env.EMAIL);
    await loginPage.input.password.fill(process.env.PASSWORD);
    await loginPage.button.submit.click();

    await expect(page.locator(".ant-avatar-square")).toBeVisible(); //не относится к странице логина, поэтому оставляем селектор
  });

  //negative
  test("Sign in with non-existing credentials", async ({ loginPage }) => {
    await loginPage.input.email.fill("vl1vl@yahoo.com");
    await loginPage.input.password.fill("invalid!");
    await loginPage.button.submit.click();

    await expect(loginPage.toast).toBeVisible();
    await expect(loginPage.toast).toHaveText("User login. Fail");
  });
});
