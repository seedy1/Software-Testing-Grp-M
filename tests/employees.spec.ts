import {expect, test} from "@playwright/test";
import {generateRandString} from "./utils/rand-string";

async function createEmployee(page: any, str: string) {
  await page.goto('https://m.hr.dmerej.info/add_employee');
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

test.describe('Managing employees', async () => {
  let employeeName = '';

  test.beforeEach(async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/reset_db');
    await page.click('.btn-danger');

    employeeName = generateRandString('add');
    await createEmployee(page, employeeName);
  });

  test('can create new employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');
    expect(await page.content()).toContain(employeeName);
  });

  test('can edit basic info of an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update basic info '`);

    const newRandString: string = generateRandString('edit');

    await page.fill(`input[name='name']`, newRandString);
    await page.fill(`input[name='email']`,  newRandString + '@test.test');

    await page.click('.btn-primary');

    await expect(page).toHaveURL('https://m.hr.dmerej.info/employees');
    expect(await page.content()).toContain(newRandString);
  });

  test('can edit address line 1 of an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    const newRandString: string = generateRandString('edit');

    await page.fill(`input[name='address_line1']`, newRandString);

    await page.click('.btn-primary');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    expect(await page.inputValue(`input[name='address_line1']`)).toEqual(newRandString);
  });

  test('can edit address line 2 of an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    const newRandString: string = generateRandString('edit');

    await page.fill(`input[name='address_line2']`, newRandString);

    await page.click('.btn-primary');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    expect(await page.inputValue(`input[name='address_line2']`)).toEqual(newRandString);
  });

  test('can edit city of an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    const newRandString: string = generateRandString('edit');

    await page.fill(`input[name='city']`, newRandString);

    await page.click('.btn-primary');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    expect(await page.inputValue(`input[name='city']`)).toEqual(newRandString);
  });

  test('can edit zip code of an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    const editRand: string = (Math.floor(Math.random() * 999)).toString();

    await page.fill(`input[name='zip_code']`, editRand);

    await page.click('.btn-primary');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update address '`);

    expect(await page.inputValue(`input[name='zip_code']`)).toEqual(editRand);
  });

  test('can edit hiring date of an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update legal info '`);

    const newRandString: string = generateRandString('edit');

    await page.fill(`input[name='hiring_date']`, newRandString);

    await page.click('.btn-primary');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update legal info '`);

    expect(await page.inputValue(`input[name='hiring_date']`)).toEqual(newRandString);
  });

  test('can edit job title of an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update legal info '`);

    const newRandString: string = generateRandString('edit');

    await page.fill(`input[name='job_title']`, newRandString);

    await page.click('.btn-primary');

    await page.click('.btn-primary  >> nth=-1');
    await page.click(`text=' Update legal info '`);

    expect(await page.inputValue(`input[name='job_title']`)).toEqual(newRandString);
  });

  test('can delete an employee', async ({page}) => {
    await page.goto('https://m.hr.dmerej.info/employees');

    await page.click(`text=' Delete ' >> nth=-1`);
    await page.click(`text='Proceed'`);

    expect(await page.content()).not.toContain(employeeName);
  });
});
