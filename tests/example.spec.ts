import { test, expect } from '@playwright/test';

async function createEmployee(page: any, str: string) {
  await page.fill(`input[name='name']`, str);
  await page.fill(`input[name='email']`, str + '@test.test');
  await page.fill(`input[name='address_line1']`, str);
  await page.fill(`input[name='address_line2']`, str);
  await page.fill(`input[name='city']`, str);
  await page.fill(`input[name='zip_code']`, '92130');
  await page.fill(`input[name='hiring_date']`, '01/10/2012');
  await page.fill(`input[name='job_title']`, str);
  await page.click('.btn-primary');
}

test.describe('Team M', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/reset_db');
    await page.click('.btn-danger');
  });

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

  test('can create new employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/add_employee');

    const randString = 'test' + (Math.floor(Math.random() * 999)).toString();

    await createEmployee(page, randString);

    await expect(page).toHaveURL('https://m.hr.dmerej.info/employees');
    expect(await page.content()).toContain(randString);
  });
});


