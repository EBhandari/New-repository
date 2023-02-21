const LandingPage = require("../pages/landingpage")
const SignUpPage = require("../pages/signuppage")
const LoginPage = require("../pages/loginpage")

describe ('Landing Page',()=>{
    it ('should check the aura app lands on the landing page',async()=>
    {
        //check the elements
        LandingPage.checkLandingPageElements();
    })

    it ('should allow you to be able to get started',async()=>{
       //check the user can see get started option and can select it
       LandingPage.selectGetStarted();
       

       //assert the navigation to Create an account page
       SignUpPage.checkSignUpPageTitle();

        //await driver.switchContext('WEBVIEW_chrome');

    })

    it ('should be able to login with google account')
    {
        //check user can select google account to login
        LoginPage.clickcontwithGoogleBtn();

        //assert the user is able to login
        

    }
})