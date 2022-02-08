import { test, expect } from '@playwright/test';
import {generateRandString} from "./utils/rand-string";

test.describe('Team M', () => {

  test('Have the right title', async ({ page }) => {
    await page.goto('https://m.hr.dmerej.info/');
    await expect(page).toHaveTitle('HR DB');
  });

  test('can access page to create new employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/');
    await page.click('text=Add new employee');

    await expect(page.locator('text=Basic Info').first()).toBeVisible();
    await expect(page).toHaveURL('https://m.hr.dmerej.info/add_employee');
  });

  test.describe('Team management', () => {

    const RandString: string = generateRandString('Team');

    test('Create a new team', async ({ page }) => {
      await page.goto('https://m.hr.dmerej.info/add_team');
      await page.fill('form input[name="name"]', RandString);
      await page.locator('form button[type="submit"]').click();
      await expect(page).toHaveURL('https://m.hr.dmerej.info/teams');
      expect(await page.content()).toContain(RandString);
    });


    test('Delete a team', async ({ page }) => {
      await page.goto('https://m.hr.dmerej.info/teams');
      await page.click('.btn-danger');
      await page.locator('form button[type="submit"]');
      expect (await page.content()).not.toContain(RandString);

    });
  })

});
