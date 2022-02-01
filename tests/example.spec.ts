import { test, expect } from '@playwright/test';

test('Danger zone title', async ({ page }) => {
  await page.goto('https://m.hr.dmerej.info/');
  await page.locator('h2').click();
  await expect(page).toHaveTitle(/Danger zone/);
});
