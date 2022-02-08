import {test, expect} from "@playwright/test";


async function createTeam(page: any, str: string) {
    await page.fill('form input[name="name"]', str);
    await page.click('.btn-primary');
    await page.click('text=Add')
}

test.describe("Test Delete Team Page", () =>{

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://m.hr.dmerej.info/add_team');
        await page.fill('form input[name="name"]', "team2");
        await page.locator('form button[type="submit"]').click();

      });

    // delete first seen team
    test('Delete a team', async ({ page }) => {

        await page.goto('https://m.hr.dmerej.info/teams');
        

        await page.click('.btn-danger');
        await page.locator('form button[type="submit"]').click();

        //checking redirect
        await expect(page).toHaveURL('https://m.hr.dmerej.info/teams');
      
      });

});