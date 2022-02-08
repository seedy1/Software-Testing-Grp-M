import {test, expect} from "@playwright/test";


test.describe("Test Create Team Page", () =>{


    // create a new team 
    test("Create a new team", async ({page}) =>{

        await page.goto('https://m.hr.dmerej.info/add_team');
        await page.fill('form input[name="name"]', "team1");
        await page.locator('form button[type="submit"]').click();

        await expect(page).toHaveURL('https://m.hr.dmerej.info/teams');
        expect(await page.content()).toContain("team1");

    });

});