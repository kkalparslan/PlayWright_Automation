import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {
  /**
    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    //await page.getByPlaceholder('Enter your username').fill('Alparslan') inspectorun verdiği locator
    await page.locator('[placeholder="Enter your username"]').fill('Alparslan')
    await page.locator('[placeholder="Enter your password"]').fill('123456')
    await page.waitForSelector('id=log-in',{timeout:4000})
    await page.click('id=log-in')  
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.pause()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()

    //await page.pause()
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByLabel('Email:').press('Control+a');
    await page.getByLabel('Email:').press('Control+c');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click(); */

  //gökhan spor okulu  
  await page.goto('https://online.spor.istanbul/anasayfa');
  await page.getByText('Kapat').click();
  await page.getByRole('link', { name: ' Üye Giriş' }).click();
  await page.getByPlaceholder('TC/Pasaport No').click();
  await page.getByPlaceholder('TC/Pasaport No').fill('15017265816');
  await page.getByPlaceholder('Şifre').click();
  await page.getByPlaceholder('Şifre').fill('Ec974125');
  await page.getByRole('button', { name: 'Giriş Yap' }).click();
  await page.getByText('Kapat').click();
  await page.getByRole('link', { name: 'Kiralama Hizmetleri' }).click();
  await page.locator('#select2-ddlBransFiltre-container').click();
  await page.getByRole('treeitem', { name: 'TENİS', exact: true }).click();
  await page.getByLabel('-- Se�iniz --').first().click();
  await page.pause();
  //await page.getByRole('treeitem', { name: 'PENDİK ÇAMLIK SPOR TESİSİ' }).click();
  await page.getByRole('treeitem', { name: 'MALTEPE SAHİL SPOR TESİSİ' }).click()
  //await page.getByRole('treeitem', { name: 'SİLİVRİ MÜJDAT GÜRSU SPOR TESİSİ' }).click()
  await page.locator('#select2-ddlSalonFiltre-container').click();
  await page.getByRole('treeitem', { name: 'KAPALI TENİS KORTU 2' }).click();
  //await page.getByRole('link', { name: 'Rezervasyon' }).click()
  //await page.pause();
  //locator('#pageContent_rptList_rpChild_7_lbRezervasyon_1')
  await page.locator('#pageContent_rptList_rpChild_7_lbRezervasyon_3').click()
  //locator('#pageContent_rptList_rpChild_5_lblSeans_8')
  //await page.locator('#pageContent_Div1 div').filter({ hasText: 'Çarşamba 20.12.2023' }).first()
  //await page.locator('#pageContent_rptList_rpChild_6_lbRezervasyon_4').click()
  //await page.locator('#pageContent_rptList_rpChild_5_lbRezervasyon_4').click()
  await new Promise(res => setTimeout(res, 2000));
  await page.getByLabel('Kort Kiralama').click()
  await new Promise(res => setTimeout(res, 1000));
  await page.getByLabel('Kiralık Satış Sözleşmesi\'ni okudum ve kabul ettim').click()
  await new Promise(res => setTimeout(res, 1000));
  await page.getByRole('link', { name: ' Sepete Ekle' }).click()
  await page.pause();


  // ---------------------
  //await page.close();
  /**
   * 3 ayrı testi birleştirdim. tek project ile headed modda koşturdum. sıra ile arka arkaya açtı hepsini.
   * ancak üç testin toplam koşma süresi config file içindeki timeout u geçerse hata veriyor ve retry 1 ayarlı
   * olduğu için bir kere teyit için koşuyor. default 30*1000 ms olan ayarı 40*1000 e çıkardım sorunsuz geçti.
   */
});
