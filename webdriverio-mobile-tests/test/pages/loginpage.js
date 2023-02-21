class loginPage{

    get loginLabel(){
        return $('~Login')
    }
    get loginMessage(){
        return $('~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt.')
    }

    get contWithEmailBtn(){
        return $('~Continue with email')
    }

    get contWithGoogleBtn()
    {
        return $('~Continue with Google')
    }

    get contWithFacebookBtn()
    {
        return $('~Continue with Facebook')
    }

    get contWithAppleBtn()
    {
        return $('~Continue with Apple')
    }

    get dontHaveAccountlbl()
    {
        return $("~Don't have an account?")
    }

    get signUpLink()
    {
        return $('~Sign Up')
    }

    get loginWithlbl()
    {
        return $('~Login With')
    }


    get emailTextBox()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]')
    }  
    
    get passwordTextBox()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]');
    }

    get passwordMessage()
    {
        return $("~At least 8 characters, lower and upper case letters & symbols.");
    }

    get loginButton()
    {
        return $('~Login');
    }

    get loggedInEmail()
    {
        return $('~email: devices@thisisaura.com');
    }

    get loginPageOption()
    {
        return $('~Login Page');
    }

    // get googleEmailAccount()
    // {
    //     return $('//*[@id="screenshotContainer"]/div[2]/div/div/div/div/div[13]/div');
    // }

    async selectLoginPageOption()
    {
        await this.loginPageOption.click();
    }


    async checkLoginSuccess()
    {
        await expect(this.loggedInEmail.toBeExisting());
        console.log('Success');
        
    }

    async checkLoginPage(){
     await expect(this.loginLabel.toBeExisting());
     await expect(this.loginMessage.toBeExisting());
     await expect(this.contWithAppleBtn.toBeExisting());
     await expect(this.contWithEmailBtn.toBeExisting());
     await expect(this.contWithFacebookBtn.toBeExisting());
     await expect(this.contWithGoogleBtn.toBeExisting());
     await expect(this.dontHaveAccountlbl.toBeExisting());
     await expect(this.signUpLink.toBeExisting());
     await expect(this.emailTextBox.toBeExisting());
     await expect(this.passwordTextBox.toBeExisting());
    }

    async clickContWithEmail()
    {
        await this.contWithEmailBtn.click();
    }

    async setEmailAddress()
    {
        await this.emailTextBox.click();
        await this.emailTextBox.setValue('devices@thisisaura.com');
    }

    async setPassword()
    {
      await this.passwordTextBox.click(); 
      await this.passwordTextBox.setValue('Password@123');
      await driver.hideKeyboard();
    }

    async setIncorrectPassword()
    {
        await this.passwordTextBox.click(); 
        await this.passwordTextBox.setValue('Password');
        await driver.hideKeyboard();
    }

    async passwordMessageCheck(msg)
    {
        await expect(this.passwordMessage).toBeExisting();
    }

    async checkLoginButton()
    {
        await expect(this.loginButton.toBeDisabled());
    }

    async clickLoginButton()
    {
        await this.loginButton.click();
    }

    get googleSignIn()
    {
        //driver.findElement.by.xpath('//*[@id="view_container"]//div/div[2]//div[1]//form//section//div/div//ul/li[2]//div[1]//div[2]/div[2]');
         
    }

    get allowLocation()
    {
        return $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button');
    }

    get acceptTerms()
    {
        return $('id=com.android.chrome:id/terms_accept');
    }

    get noThanks()
    {
        return $('id=com.android.chrome:id/negative_button');
    }

    async selectallowLocation()
    {
        await this.allowLocation.click();
        await this.acceptTerms.click();
        await this.noThanks.click();
    }

    async clickgoogleLogin()
    {
        await this.contWithGoogleBtn.click();
    }

    async clickcontwithGoogleBtn()
    {
        await this.clickLoginButton();
        await this.selectallowLocation();
        driver.contexts().then(async function (contexts) { // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
        return driver.context(contexts[1]); // choose the webview context
        }

        //do some webtesting
         //await clickgoogleLogin();
         .elementsByXpath('//*[@id="view_container"]//div/div[2]//div[1]//form//section//div/div//ul/li[2]//div[1]//div[2]/div[2]')).click()
         .context("NATIVE_APP")

         .quit();

    }


    // async setPasswordtoMin()
    // {
    //    await this.passwordTextBox.setValue('kCMbP88D@z3$RP4DMk');
    // }

    async checkPassword(Password)
    {
      const passw = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/';
      if(Password==passw)
      {
        console.log('Incorrect password');
        return true;
      }

      else{
        console.log("correct password");
        return false;
      }
    }

}

module.exports = new loginPage;