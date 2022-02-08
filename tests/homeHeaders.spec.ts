import { test, expect } from '@playwright/test';


test.describe('Test for Home page title', () => {

  test('Have the right title', async ({ page }) => {
    await page.goto('https://m.hr.dmerej.info/');
    await expect(page).toHaveTitle('HR DB');
  });


});
