const userSelectors = require('./user_selectors')
const userData = require('./user_data')

module.exports = {

    // This functoin will sign in a user using whatever data you input in the actual test.
    userSignInFunc: function(email, password, browser) {
        browser
            .setValue(userSelectors.loginScreen.loginEmail, email)
            .pause(500)
            .setValue(userSelectors.loginScreen.loginPassword, password)
            .pause(500)
            .click(userSelectors.loginScreen.signInButton)
    },
    // This function will sign in a user with the admin data.
    adminLoginFunc: function(browser) {
        browser
            .waitForElementVisible(userSelectors.loginScreen.loginEmail, 1000)
            .setValue(userSelectors.loginScreen.loginEmail, userData.signInData.goodtransaction1.inputEmail)
            .setValue(userSelectors.loginScreen.loginPassword, userData.signInData.goodtransaction1.inputPassword)
            .click(userSelectors.loginScreen.signInButton)
    },
    //This function will attempt to create a new account using blank fields until it alerts with an error.
    usercreateAcctBlankDataFunc: function(workEmail, first, last, password, browser) {
        browser
            .waitForElementVisible(userSelectors.loginScreen.createAnAcctBtn, 1000)
            .click(userSelectors.loginScreen.createAnAcctBtn)
            .waitForElementVisible(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.yes, 1000)
            .clickByText(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.yes, "Yes")
            .waitForElementVisible(userSelectors.createAnAccountScreens.insertWorkEmailScreen.newWorkEmail, 8000)
            .setValue(userSelectors.createAnAccountScreens.insertWorkEmailScreen.newWorkEmail, workEmail)
            .click(userSelectors.createAnAccountScreens.insertWorkEmailScreen.nextArrowWorkEmail)
            .waitForElementVisible(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, 1000)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, first)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.lastName, last)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.newPassword, password)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.showPassword)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.nextArrowCreateAcct)
            .pause(1000)
            .acceptAlert()
    },
    /*This function will attempt to create a new account using bad data (It gets further 
     through the process and actually attempts to get perks. */
    usercreateAcctBadDataFunc: function(workEmail, first, last, password, zipCode, browser) {
        browser
            .waitForElementVisible(userSelectors.loginScreen.createAnAcctBtn, 1000)
            .click(userSelectors.loginScreen.createAnAcctBtn)
            .waitForElementVisible(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.yes, 1000)
            .clickByText(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.yes, "Yes")
            .waitForElementVisible(userSelectors.createAnAccountScreens.insertWorkEmailScreen.newWorkEmail, 5000)
            .setValue(userSelectors.createAnAccountScreens.insertWorkEmailScreen.newWorkEmail, workEmail)
            .click(userSelectors.createAnAccountScreens.insertWorkEmailScreen.nextArrowWorkEmail)
            .waitForElementVisible(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, 1000)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, first)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.lastName, last)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.newPassword, password)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.showPassword)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.nextArrowCreateAcct)
            .pause(1500)
            .acceptAlert()
            .pause(500)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, first)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.lastName, last)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.newPassword, password)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.nextArrowCreateAcct)
            .waitForElementVisible(userSelectors.createAnAccountScreens.zipCodeScreen.zipCode, 1500)
            .setValue(userSelectors.createAnAccountScreens.zipCodeScreen.zipCode, zipCode)
            .click(userSelectors.createAnAccountScreens.zipCodeScreen.getPerksButton)
            .pause(500)
            .acceptAlert()
    },
    // This function will attempt to create an account with a code using bad data.
    createAcctWithBadCode: function(code1, code2, code3, code4, personalEmail, first, last, password, zipCode, browser) {
        browser
            .waitForElementVisible(userSelectors.loginScreen.createAnAcctBtn, 1000)
            .click(userSelectors.loginScreen.createAnAcctBtn)
            .waitForElementVisible(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.noButCode, 1000)
            .click(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.noButCode)
            .pause(2000)
            // .waitForElementVisible(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber1, 10000)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber1, code1)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber2, code2)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber3, code3)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber4, code4)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.personalEmail, personalEmail)
            .click(userSelectors.createAnAccountScreens.companyCodeScreen.nextArrowCodeScreen)
            .waitForElementVisible(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, 1000)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, first)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.lastName, last)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.newPassword, password)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.showPassword)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.nextArrowCreateAcct)
            .pause(500)
            .waitForElementVisible(userSelectors.createAnAccountScreens.zipCodeScreen.zipCode, 1500)
            .setValue(userSelectors.createAnAccountScreens.zipCodeScreen.zipCode, zipCode)
            .click(userSelectors.createAnAccountScreens.zipCodeScreen.getPerksButton)
            .pause(500)
            .acceptAlert()
    },
    // This function will go through the steps of creating a new account with a work email.
    userCreateAcctWithWorkEmailFunc: function(workEmail, first, last, password, zipCode, browser) {
        browser
            .waitForElementVisible(userSelectors.loginScreen.createAnAcctBtn, 1000)
            .click(userSelectors.loginScreen.createAnAcctBtn)
            .waitForElementVisible(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.yes, 1000)
            .clickByText(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.yes, "Yes")
            .pause(1500)
            .setValue(userSelectors.createAnAccountScreens.insertWorkEmailScreen.newWorkEmail, workEmail)
            .pause(1000)
            .click(userSelectors.createAnAccountScreens.insertWorkEmailScreen.nextArrowWorkEmail)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, first)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.lastName, last)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.newPassword, password)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.showPassword)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.nextArrowCreateAcct)
            .pause(3000)
            .setValue(userSelectors.createAnAccountScreens.zipCodeScreen.zipCode, zipCode)
            .pause(2000)
            .click(userSelectors.createAnAccountScreens.zipCodeScreen.getPerksButton)
            .pause(1500)
            .url('http://localhost:8080/#/login')
            .refresh()
            .waitForElementVisible(userSelectors.loginScreen.loginEmail, 1500)
            .setValue(userSelectors.loginScreen.loginEmail, workEmail)
            .setValue(userSelectors.loginScreen.loginPassword, password)
            .click(userSelectors.loginScreen.signInButton)
            .waitForElementVisible(userSelectors.dealsScreen.dealTypes.featuredDeal, 2500)

    },

    /* This function will  go through the steps of creating a new account with a VALID work code. Notice clickByText had to be used in order to click certain areas of the function because the selectors were used with IONIC and we are testing with NIGHTWATCH. */
    userCreateAcctWithCodeFunc: function(code1, code2, code3, code4, personalEmail, first, last, password, zipCode, browser) {
        browser
            .waitForElementVisible(userSelectors.loginScreen.createAnAcctBtn, 2000)
            .click(userSelectors.loginScreen.createAnAcctBtn)
            .waitForElementVisible(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.noButCode, 2000)
            .clickByText(userSelectors.createAnAccountScreens.doYouHaveWorkEmailScreen.noButCode, "No, but I have a code")
            .pause(3000)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber1, code1)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber2, code2)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber3, code3)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.codeNumber4, code4)
            .setValue(userSelectors.createAnAccountScreens.companyCodeScreen.personalEmail, personalEmail)
            .click(userSelectors.createAnAccountScreens.companyCodeScreen.nextArrowCodeScreen)
            .pause(500)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.firstName, first)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.lastName, last)
            .setValue(userSelectors.createAnAccountScreens.createYourAccountScreen.newPassword, password)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.showPassword)
            .click(userSelectors.createAnAccountScreens.createYourAccountScreen.nextArrowCreateAcct)
            .pause(500)
            .setValue(userSelectors.createAnAccountScreens.zipCodeScreen.zipCode, zipCode)
            .click(userSelectors.createAnAccountScreens.zipCodeScreen.getPerksButton)
            .pause(500)
            .url('http://localhost:8080/#/login')
            .refresh()
            .waitForElementVisible(userSelectors.loginScreen.loginEmail, 1000)
            .setValue(userSelectors.loginScreen.loginEmail, personalEmail)
            .setValue(userSelectors.loginScreen.loginPassword, password)
            .click(userSelectors.loginScreen.signInButton)
            .waitForElementVisible(userSelectors.dealsScreen.dealTypes.featuredDeal, 1000)

    },
    /* This function tests many things. In general it goes through the process of redeeming a deal in each of the 4 categories available. It cancels selections, redeems deals, goes back pages, watches for the correct text to be visible, etc. Notice clickByText had to be used in order to click certain areas of the function because the selectors were used with IONIC and we are testing with NIGHTWATCH. */
    userRedeemingDealFunc: function(selection, deal, vendor, browser) {
        browser
            .pause(2000)
            .click(selection)
            .pause(1000)
            .clickByText(userSelectors.dealsScreen.inDeals.dealTag, deal)
            .pause(1000)
            .assert.containsText(userSelectors.dealsScreen.inDeals.location, vendor.locationLine1)
            .assert.containsText(userSelectors.dealsScreen.inDeals.location, vendor.locationLine2)
            .assert.containsText(userSelectors.dealsScreen.inDeals.hours, vendor.hoursLine1)
            .assert.containsText(userSelectors.dealsScreen.inDeals.hours, vendor.hoursLine2)
            .assert.containsText(userSelectors.dealsScreen.inDeals.hours, vendor.hoursLine3)
            .assert.attributeContains(userSelectors.dealsScreen.inDeals.location, 'href', vendor.locationUrl)
            .assert.attributeContains(userSelectors.dealsScreen.inDeals.callUsLink, 'href', vendor.phone)
            .assert.attributeContains(userSelectors.dealsScreen.inDeals.websiteLink, 'href', vendor.website)
            .clickByText(userSelectors.dealsScreen.inDeals.selectDealTag, deal)
            .pause(1000)
            .clickByText(userSelectors.dealsScreen.inDeals.cancelButtonTag.tag, userSelectors.dealsScreen.inDeals.cancelButtonTag.text)
            .pause(1000)
            .clickByText(userSelectors.dealsScreen.inDeals.selectDealTag, deal)
            .pause(2000)
            .clickByText(userSelectors.dealsScreen.inDeals.redeemButtonTag.tag, userSelectors.dealsScreen.inDeals.redeemButtonTag.text)
            .pause(2000)
            .clickByText(userSelectors.dealsScreen.inDeals.redeemedButtonTag.tag, userSelectors.dealsScreen.inDeals.redeemedButtonTag.text)

    },
    // This function will click the back button (upper left corner of pages past the home page) twice.
    backButton: function(browser) {
        browser
            .clickByText(userSelectors.dealsScreen.backButton.tag, 'Back')
            .pause(2000)
            .clickByText(userSelectors.dealsScreen.backButton.tag, 'Back')
    }

}