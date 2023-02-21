const LoginPage = require('../pages/loginpage')
describe ('Login Test',() =>

     {
        it ('should land on the login page',async() =>
        {

            await LoginPage.checkLoginPage();


        } )

        it ('should be able to successfully login',async()=>
        {
            //Checking the Login Page exist
            await LoginPage.clickContWithEmail();
            await LoginPage.setEmailAddress();
            await LoginPage.setPassword();

            //Checking the login button is enabled if the details are entered
            await LoginPage.clickLoginButton();

            //assertion
            await LoginPage.checkLoginSuccess();

        })

        // it ('should throw error for password less than 8 characters',async()=>
        // {
        //     await LoginPage.checkPassword(LoginPage.passwordTextBox.getValue());
        // })

        it ('should throw incorrect password message', async()=>
        {
           await LoginPage.selectLoginPageOption();
           await LoginPage.clickContWithEmail();
           await LoginPage.setEmailAddress();
           await LoginPage.setIncorrectPassword();

           //Check the incorrect Password Message appeared correctly
           await LoginPage.passwordMessageCheck();
           await LoginPage.checkLoginButton();
        })

        it ('should be able to login through google account',async()=>
        {
            //Login to the google account
            await LoginPage.clickcontwithGoogleBtn();

            //
        })

     })