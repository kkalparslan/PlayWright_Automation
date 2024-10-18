import {test, expect} from '@playwright/test'

test('selector demo', async ({page}) => {
    await page.goto ('https://www.saucedemo.com/')
    
    //using any object property
    //await page.pause() bu kodu açınca aynen debug modda çalıştırıyor gibi step by step
    // gözlemleyebiliyoruz testi. test playwright inspector window da açılıyor.
    // ayrıca --debug komutu ile de step by step izleyebiliyoruz.
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Alparslan')
    //await page.locator('["id=user-name"]').click
    await page.locator('id=user-name').fill('Ahmet')

    //using CSS Selector
    //#login-button
    
    await page.click('#login-button')
    
     


});