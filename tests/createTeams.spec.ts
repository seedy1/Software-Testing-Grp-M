import {test, expect} from "@playwright/test";
import {generateRandString} from "./utils/rand-string";


test.describe("Test Create Team Page", () =>{

    const RandString: string = generateRandString('Team');

    test("Create a new team", async ({page}) =>{

        await page.goto('https://m.hr.dmerej.info/add_team');
        await page.fill('form input[name="name"]', RandString);
        await page.locator('form button[type="submit"]').click();
        await expect(page).toHaveURL('https://m.hr.dmerej.info/teams');
        expect(await page.content()).toContain(RandString);

    });

});