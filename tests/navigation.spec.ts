import { test, expect } from '@playwright/test';

test.describe('Team M - navigation test', () => {

    // list employees - await expect(page.locator('.my-table-row').nth(2)).toContainText('Agent Search');
    test('Navigate to list employyes page', async ({ page }) => {
        await page.goto('https://m.hr.dmerej.info');
        await page.click('text=List Employees');

        // await expect(page).toHaveTitle('HR DB');
        await expect(page).toHaveURL('https://m.hr.dmerej.info/employees');
        await expect( page.locator('.table') ).toContainText("name");
    });

    // add employees
    
    
    // list teams

    //creae new team

    // reset Db

    // back to home



});