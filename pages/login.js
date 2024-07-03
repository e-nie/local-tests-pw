export class LoginPage {
  constructor(page) {
    this.page = page;

    //do not describe ALL elements on the page, only those that are needed for the auth.spec
    this.emailInput = page.locator("#normal_login_email");
    this.passwordInput = page.locator("#normal_login_password");
    this.submitButton = page.locator('button[type="submit"]');
    this.toast = page.locator(".ant-notification-notice-message");
  }

  async open() {
    return this.page.goto("/user/login");
  }

  async logIn(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
