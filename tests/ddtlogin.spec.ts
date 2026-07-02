import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../testconfig.ts/testconfig';
import { DataProvider } from '../utils/receivedata';




const datapath = "./data/logindata.json";
let datamain = DataProvider.getTestDataFromJson(datapath);

for (const data of datamain) {
    test(`data-driven test ${data.email} @mycode`, async ({ page }) => {
        // Test implementation here
        const config = new TestConfig();
        const homePage = new HomePage(page);
        

        await homePage.openHomePage(config.appurl);
        await homePage.clickMyAccount();
        await homePage.loginLink.click();

        await page.locator('input[name="email"]').fill(data.email);
        await page.locator('input[name="password"]').fill(data.password);
        await page.locator('input[type="submit"]').click();


        if (data.expected.toLowerCase() === 'success') {
            console.log("✅ Login is successful!");
        }
        else {
            console.log("❌ Login failed with error: " + data.expected);
        }




    })





}