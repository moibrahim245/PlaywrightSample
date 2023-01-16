import { 
    request
    // chromium, expect
 } from "@playwright/test";
async function globalConfig() {
    const requestContext = await request.newContext();
    await requestContext.post('https://qacart-todo.herokuapp.com/api/v1/users/login',
    {
        data: {
            email: 'moibrahim245@gmail.com',
            password: 'Lorry123!'
        }
    });

    await requestContext.storageState({
        path: 'storageState.json',

    });


    // const browser = await chromium.launch(); 
    // const page = await browser.newPage();
    // await page.goto('https://qacart-todo.herokuapp.com/login');
    // await page.locator('[data-testid="email"]').fill('moibrahim245@gmail.com');
    // await page.locator('[data-testid="password"]').fill('Lorry123!');
    // await page.locator('[data-testid="submit"]').click();
    // const welcomeMessage = page.locator('[data-testid="welcome"]');
    // await expect(welcomeMessage).toBeVisible();
    // await page.context().storageState({
    //     path: 'storageState.json',
    // })
}

export default globalConfig;
