const LoginPage = require('../pages/loginpage')
const SignUpPage = require('../pages/signuppage')
describe('Sign Up',()=>
{

    it ('should throw an error for invalid email address',async()=>
    {
        //enter the invalid email address
        await LoginPage.setEmailAddress('devices');

        //assert email address error
        await SignUpPage.checkemailError();
    }
    )

    it ('should throw an error for invalid password that is less than 8 characters',async()=>
    {
        //enter the invalid password (less than 8 characters)
        await LoginPage.setIncorrectPassword();
        
        //assert the password field has the required error message
        await LoginPage.passwordMessage();

    })

    

})