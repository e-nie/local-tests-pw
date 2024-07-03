import { Navbar } from "../elements/navbar";

//в этот шаблонный класс мы записываем все общие свойства для всех страниц
export class Page {
  constructor(page) {
    this.page = page;
    this.toast = page.locator(".ant-notification-notice-message");
    this.navbar = new Navbar(page);
  }
}
