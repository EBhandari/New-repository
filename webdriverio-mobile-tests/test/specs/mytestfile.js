describe('Sample Test',() => {
    it ('This is my first mobile test',async ()=>{
         console.log('Welcome to my first ever Appium Test');
    });



    it ('should land on the Dev landing page', async () => {
         //Landing page once decided
    })

    it ('returns the expected options on the sign up Page',async () =>{
        
        //find the element by accessibility id - Create an Account label 
        const eleAccount = await $('~Create an account');

        //find the element by accessibility id - Continue with email button
        const eleEmail = await $('~Continue with email');

        //find the element by accessibility id - Continue with google button
        const eleGoogle = await $('~Continue with Google');

        //find the element by accessibility id - Continue with facebook button
        const eleFacebook = await $('~Continue with Facebook');

        //find the element by accessibility id - Continue with Apple button
        const eleApple = await $('~Continue with Apple');

        //find the element by accessibility id - Already have an Account label
        const eleHaveAnAccount = await $('~Already have an account?');

        //find the element by accessibility id - Skip Button
        const eleSkip = await $('~Skip');

        //const eleAccountValue = eleAccount.getAttribute('content-desc');
        const className = await $('android.widget.ImageView');

        //assertion to check the elements exists
        await expect(eleAccount).toBeExisting();
        await expect(eleEmail).toBeExisting();
        await expect(className).toBeExisting();
        await expect(eleGoogle).toBeExisting();
        await expect(eleApple).toBeExisting();
        await expect(eleHaveAnAccount).toBeExisting();
        await expect(eleSkip).toBeExisting();
        

    })

    it ('should have login link and be able to click', async () => 
    {
        //find the element by accessibility id
        const login = await $("~Login");

        //click on element
        await login.click();

        //to handle current devland mode
        //Landing page once decided
      
        await (await $('~DevLand cheat mode!').click());
        await (await $('~Sign Up Page').click());


        //assertion - Waiting to see how the login page looks
        //const x = await $('~Action')
        //await expect(action).toBeExisting();
    })

    it ('skip option to return back to Devland page', async ()=>
    {
        //find the element using accessibility
        const eleSkip = await $('~Skip');

        //find the skip button can be clicked
        eleSkip.click();

        //assert the screen after clicking the skip button
        const signUpPage = await $('~Sign Up Page');
        const loginPage = await $('~Login Page');
        const userNotSigned = await $('~User Not Signed In');
        await expect(signUpPage).toBeExisting();
        await expect(loginPage).toBeExisting();
        await expect(userNotSigned).toBeExisting();


    })

})