import {test, expect} from "@playwright/test";



test('Should be able to login using the API', async ({request})=>{
    const response = await request.post('https://qacart-todo.herokuapp.com/api/v1/users/login',
    {
        data: {
            email: 'moibrahim245@gmail.com',
            password: 'Lorry123!'
        }
    });

    await expect(await response.ok()).toBeTruthy();
    await expect(await response.json()).toHaveProperty('firstName', 'Mohamed')

})