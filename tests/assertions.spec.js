import test, {page, expect} from '@playwright/test'

test('Assertions Demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //ASSERTIONS
    //check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    if(await page.$('text=The Kitchen')){
        await page.getByRole('heading', { name: 'The Kitchen' }).click
        //await page.click('text=The Kitchen')  bu şekilde yürütünce debug/pause modda click 
        //yaptığını da görebiliyorum. aksi halde click i sona alırsam görmeden kapatıyor.
    }

    // check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()
    /**
     * expect in arkasına.soft u ekleyince assertion fail olsa bile execution durmuyor ve devam ediyor
     */
    // check element enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    // check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen')

    // check attribute value
    //await page.pause()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class','chakra-heading css-dpmy2a')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)
    /**
     * 31. satırın sonunda toHaveAttribute('class', /.*css-dpmy2a/) ile dynamic bir value koymuş olduk.
     * class valuesunda da contains gibi yapabildik. bazı harfleri sildik.
     */

    // check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/) //'tüm title ı tırnak içinde de yazabilirdik' 
    await page.pause()

    // visual validation with screenshot
    await expect(page).toHaveScreenshot()  
    /**
     * screenshot metodu ile ilk koşturduğumuzda fail veriyor ve ilk snapshot ı alıyor. 2. run da
     * karşılaştırıyor ve test pass oluyor.
     */
})