import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { TestConfig } from '../testconfig.ts/testconfig';
import { FakerUtils } from '../utils/faker';

const config = new TestConfig();
const fakerUtils = new FakerUtils();

test('register and login from homepage', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  const firstName = fakerUtils.generateRandomFirstName();
  const lastName = fakerUtils.generateRandomLastName();
  const email = fakerUtils.generateRandomEmail();
  const phone = fakerUtils.generateRandomPhoneNumber();
  const password = fakerUtils.generateRandomPassword();

  await homePage.openHomePage(config.homeurl);
  await homePage.clickMyAccount();
  await homePage.clickRegister();

  await registerPage.enterFirstName(firstName);
  await registerPage.enterLastName(lastName);
  await registerPage.enterEmail(email);
  await registerPage.enterTelephone(phone);
  await registerPage.enterPassword(password);
  await registerPage.enterConfirmPassword(password);
  await registerPage.selectPrivacyPolicy(true);
  await registerPage.clickContinue();
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page has loaded

  await homePage.clickMyAccount();

  await registerPage.clickLogout();
  
  await page.waitForTimeout(2000);
   await homePage.clickMyAccount();
   await homePage.clickLogin();

  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('input[type="submit"]').click();
 await page.waitForTimeout(2000);

});
