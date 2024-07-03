import { Page } from "./page";

export class LoginPage extends Page {
  constructor(page) {
    super(page);

    //do not describe ALL elements on the page, only those that are needed for the auth.spec
    // how to group elements - 1 option
    // this.emailInput = page.locator("#normal_login_email");
    // this.passwordInput = page.locator("#normal_login_password");
    // this.submitButton = page.locator('button[type="submit"]');

    //2nd option - group elements - create an object

    this.input = {
      email: page.locator("#normal_login_email"),
      password: page.locator("#normal_login_password"),
    };

    this.button = {
      submit: page.locator('button[type="submit"]'),
    };
  }

  async open() {
    return this.page.goto("/user/login");
  }

  async logIn(email, password) {
    //обращаемся  к элементам через переменные:
    // await this.emailInput.fill(email);
    // await this.passwordInput.fill(password);
    // await this.submitButton.click();

    //обращаемся к элементам через объекты:
    await this.input.email.fill(email);
    await this.input.password.fill(password);
    await this.button.submit.click();
  }
}
