import {test,expect} from '@playwright/test'

test('Demo Login Test 1', async({page}) => {
    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    //await page.getByPlaceholder('Enter your username').fill('Alparslan') inspectorun verdiği locator
    await page.locator('[placeholder="Enter your username"]').fill('Alparslan')
    await page.locator('[placeholder="Enter your password"]').fill('123456')
    await page.waitForSelector('id=log-in',{timeout:4000})
    await page.click('id=log-in')    
    
})

test('Demo Login Test 2', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.pause()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()

})

test.only('Demo Login Test 3', async({page}) => {
    //await page.pause()
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByLabel('Email:').press('Control+a');
    await page.getByLabel('Email:').press('Control+c');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await page.close();
})
