import { Page } from '@playwright/test';

export class HomePage {
  page: Page;
  myAccountLink: ReturnType<Page['locator']>;
  loginLink: ReturnType<Page['locator']>;
  registerLink: ReturnType<Page['locator']>;

  constructor(page: Page) {
    this.page = page;
    this.myAccountLink = page.locator('a[title="My Account"]');
    this.loginLink = page.locator('a[href$="account/login"]').first();
    this.registerLink = page.locator('a[href$="account/register"]');
  }

  async openHomePage(url: string) {
    await this.page.goto(url);
  }

  async clickMyAccount() {
    await this.myAccountLink.click();
  }

  async clickLogin() {
    await this.loginLink.click();
    console.log("clicked on login link");
  }

  async clickRegister() {
    await this.registerLink.click();
  }
}
