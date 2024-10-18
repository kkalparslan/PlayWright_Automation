import{test} from '@playwright/test'

test.skip('Test One', async({page}) => {
    // This test will be skip     
})
test('not yet ready', async({page}) => {
    test.fail();
})
test.fixme('test to be fixed', async({page}) => {
    //..
})
test('slow test', async({page}) => {
    test.slow();
    //..
})
test('Test login page @smoke', async({page}) => {
    //..
})