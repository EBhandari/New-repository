class landingpage
{
    get landingpageTitle()
    {
        return $('~Reimagining sports content');
    }

    get getStarted()
    {
        return $('~Get started');
    }

    get getstartedMessage()
    {
        return $('~By getting started you agree to our');
    }

    get termsofUse()
    {
        return $('~Terms of Use.');
    }

    
    async selectGetStarted()
    {
        await this.getStarted.click();
    }


    async selectTermsOfUse()
    {
        await this.termsofUse.click();
    }



    async checkLandingPageElements()
    {
       await expect(this.landingpageTitle.toBeExisting());
       await expect(this.getStarted.toBeExisting());
       await expect(this.termsofUse.toBeExisting());
       await expect(this.getstartedMessage.toBeExisting());
 
    }

}
module.exports = new landingpage();