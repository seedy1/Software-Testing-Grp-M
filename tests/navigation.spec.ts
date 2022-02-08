import { test, expect } from '@playwright/test';
  

test.describe('Test site Navigation', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://m.hr.dmerej.info/');
      });

    // list employees - await expect(page.locator('.my-table-row').nth(2)).toContainText('Agent Search');
    test('Navigate to list employees page', async ({ page }) => {
        await page.click('text=List Employees');

        // TODO: we should have only one expect per test - remove later
        await expect(page).toHaveURL('https://m.hr.dmerej.info/employees');
        await expect( page.locator('.table') ).toContainText("name");
    });

    // add employees
    test('Navigate to add employees page', async ({ page }) => {
        await page.click('text=Add new employee');

        // TODO: we should have only one expect per test - remove later
        await expect(page).toHaveURL('https://m.hr.dmerej.info/add_employee');
        // await expect(page).toHaveTitle("Add new employee");        
    });
    
    
    // list teams
    test('Navigate to list teams page', async ({ page }) => {

        await page.click('text=List teams');
        await expect(page).toHaveURL('https://m.hr.dmerej.info/teams');

    });

    //creae new team
    test('Navigate to craete teams page', async ({ page }) => {

        await page.click('text=Create new team');
        await expect(page).toHaveURL('https://m.hr.dmerej.info/add_team');

    });

    
    // back to home
    test('Navigate to back to home from teams page', async ({ page }) => {

        await page.click('text=List teams');
        await page.click('text=Home');
        await expect(page).toHaveURL('https://m.hr.dmerej.info');

    });


    // reset Db
    test('Navigate to reset database page', async ({ page }) => {
        await page.click('text=Reset database');
        await expect(page).toHaveURL('https://m.hr.dmerej.info/reset_db');

    })




});