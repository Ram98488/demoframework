import { Page } from '@playwright/test';

export class RegisterPage {
  page: Page;
  firstNameInput: any;
  lastNameInput: any;
  emailInput: any;
  telephoneInput: any;
  passwordInput: any;
  confirmPasswordInput: any;
  newsletterCheckbox: any;
  privacyCheckbox: any;
  continueButton: any;
  logout: any;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name="firstname"]');
    this.lastNameInput = page.locator('input[name="lastname"]');
    this.emailInput = page.locator('input[name="email"]');
    this.telephoneInput = page.locator('input[name="telephone"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="confirm"]');
    this.privacyCheckbox = page.locator('input[name="agree"]');
    this.continueButton = page.locator('input[value="Continue"]');
    this.logout = page.locator('a').filter({ hasText: 'Logout' }).first();
  }

  async openRegisterPage(url: string) {
    await this.page.goto(url);
  }

  async enterFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterTelephone(telephone: string) {
    await this.telephoneInput.fill(telephone);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(confirmPassword: string) {
    await this.confirmPasswordInput.fill(confirmPassword);
  }



  async selectPrivacyPolicy(option: boolean) {
    if (option) {
      await this.privacyCheckbox.check();
    } else {
      await this.privacyCheckbox.uncheck();
    }
  }

  async clickContinue() {
    await this.continueButton.click();
  }

    async clickLogout() {
    await this.logout.click();
  }
}
