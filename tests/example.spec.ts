import { test, expect } from '@playwright/test';

test('Have the right title', async ({ page }) => {
  await page.goto('https://m.hr.dmerej.info/');
  await page.locator('#title').click();
  await expect(page).toHaveTitle('HR DB');
});
