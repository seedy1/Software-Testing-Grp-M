// import { test, expect } from '@playwright/test';
// import {generateRandString} from "./utils/rand-string";

// async function createEmployee(page: any, str: string) {
//   await page.fill(`input[name='name']`, str);
//   await page.fill(`input[name='email']`, str + '@test.test');
//   await page.fill(`input[name='address_line1']`, str);
//   await page.fill(`input[name='address_line2']`, str);
//   await page.fill(`input[name='city']`, str);
//   await page.fill(`input[name='zip_code']`, '92130');
//   await page.fill(`input[name='hiring_date']`, '01/10/2012');
//   await page.fill(`input[name='job_title']`, str);
//   await page.click('.btn-primary');
// }

// test.describe('Team M', () => {

//   // test.beforeEach(async ({page}) => {
//   //   await page.goto('https://m.hr.dmerej.info/reset_db');
//   //   await page.click('.btn-danger');
//   // });

//   test('Have the right title', async ({ page }) => {
//     await page.goto('https://m.hr.dmerej.info/');
//     await expect(page).toHaveTitle('HR DB');
//   });

//   test('can access page to create new employee', async ({page}) => {
//     await page.goto('https://m.hr.dmerej.info/');
//     await page.click('text=Add new employee');

//     await expect(page.locator('text=Basic Info').first()).toBeVisible();
//     await expect(page).toHaveURL('https://m.hr.dmerej.info/add_employee');
//   });

//   test.describe('Managing employees', async () => {

//     test('can create new employee', async ({page}) => {
//       await page.goto('https://m.hr.dmerej.info/add_employee');

//       const randString: string = generateRandString('add');

//       await createEmployee(page, randString);

//       await expect(page).toHaveURL('https://m.hr.dmerej.info/employees');
//       expect(await page.content()).toContain(randString);
//     });

//     test('can edit basic info of an employee', async ({page}) => {
//       await page.goto('https://m.hr.dmerej.info/employees');
//       await page.click('.btn-primary');
//       await page.click(`text=' Update basic info '`);

//       const newRandString: string = generateRandString('edit');

//       await page.fill(`input[name='name']`, newRandString);
//       await page.fill(`input[name='email']`,  newRandString + '@test.test');

//       await page.click('.btn-primary');

//       await expect(page).toHaveURL('https://m.hr.dmerej.info/employees');
//       expect(await page.content()).toContain(newRandString);
//     });
//   });

  
//   test.describe('Team management', () => {

//     const RandString: string = generateRandString('Team');

//     test('Create a new team', async ({ page }) => {
//       await page.goto('https://m.hr.dmerej.info/add_team');
//       await page.fill('form input[name="name"]', RandString);
//       await page.locator('form button[type="submit"]').click();
//       await expect(page).toHaveURL('https://m.hr.dmerej.info/teams');
//       expect(await page.content()).toContain(RandString);
//     });
    
    
//     test('Delete a team', async ({ page }) => {
//       await page.goto('https://m.hr.dmerej.info/teams');
//       await page.click('.btn-danger');
//       await page.locator('form button[type="submit"]');
//       expect (await page.content()).not.toContain(RandString);
    
//     });
//   })

// });