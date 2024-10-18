import { test, expect } from '@playwright/test'
/**
 * aşağıda üç testin içinde de login ve page.close olduğundan ilk login testi ve page.close u hook
 * haline getirerek test sayısını ikiye düşürdüm. hook öncesi stepleri comment out a aldım.Hook haline
 * getirdiğim ilk testin test ismini silerek sadece async functionını bıraktım. Normalde böyleydi:
 * test('login', async ({ page }) => {})
 */

test.describe('All my tests', () => {
    /**
     * test.describe('All my tests', () => {}) bu kod ile testleri gruplandırdım. tüm testleri bu test
     * bloğunun içine aldım. artık before ve after hooklarım sadece bu grup için çalışacak.
     */
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
        //await page.close()
    })
    test.afterEach(async ({ page }) => {
        await page.close()
        /**burayı da sonradan ekledim. afterAll metodu kullandığımda bu hatayı verdi:
         * Error: "context" and "page" fixtures are not supported in "afterAll" since 
         * they are created on a per-test basis. If you would like to reuse a single 
         * page between tests, create context manually with browser.newContext().
         */
    })
    test('homepage', async ({ page }) => {
        /**  await page.goto('https://www.saucedemo.com/')
         await page.locator('[data-test="username"]').click();
         await page.locator('[data-test="username"]').fill('standard_user');
         await page.locator('[data-test="password"]').click();
         await page.locator('[data-test="password"]').fill('secret_sauce');
         await page.locator('[data-test="login-button"]').click();
         await page.waitForURL('https://www.saucedemo.com/inventory.html') */

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('#item_1_title_link').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        //await page.close()
    })
    test('logout', async ({ page }) => {
        /**await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();*/

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.waitForURL('https://www.saucedemo.com/');
    })
})