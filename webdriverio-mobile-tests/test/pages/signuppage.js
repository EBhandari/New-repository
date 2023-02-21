class signUpPage{

    get emailErrorMessage()
    {
        return $('~Incorrect email. Please try again.');
    }

    get signUpPageTitle()
    {
      return $('~Create account')
    } 





    async checkemailError()
    {
        await expect(this.emailErrorMessage.toBeExisting());
    }

    async checkSignUpPageTitle()
    {
        await expect(this.signUpPageTitle.toBeExisting());
    }
   
}

module.exports = new signUpPage;