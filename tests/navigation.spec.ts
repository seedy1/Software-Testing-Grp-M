import { test, expect } from '@playwright/test';

test.describe('Team M - navigation test', () => {

    // list employees
    test('Have the right title', async ({ page }) => {
        await page.goto('https://m.hr.dmerej.info/');
        await expect(page).toHaveTitle('HR DB');
    });

    // add employees
    
    
    // list teams

    //creae new team

    // reset Db

    // back to home



});