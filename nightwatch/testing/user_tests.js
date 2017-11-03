const userSelectors = require('../test_data/user_selectors')
const userData = require('../test_data/user_data')
const userFunctions = require('../test_data/user_functions')
module.exports = {

    beforeEach: function(browser) {
        browser
            .url('http://localhost:8080/#/login')
            .pause(500)
            .acceptAlert()
            .pause(500)

    },
    afterEach: function(browser, done) {
        browser.end()
        setTimeout(function() {
            done();
        }, 1000);
    },

    'Will I get error alert when trying to sign in with bad data': function(browser) {
        userFunctions.userSignInFunc(userData.signInData.badtransaction1.inputEmail, userData.signInData.badtransaction1.inputPassword, browser)
        browser.pause(1000)
        browser.acceptAlert()
        browser.pause(1000)
    },

    'Can I try to create an account while leaving names and/or password blank in the `create your account` section and get an error alert box saying "Please don\'t leave any field blank"': function(browser) {
        userFunctions.usercreateAcctBlankDataFunc(userData.createAcctData.workEmail.badData.transaction2, userData.createAcctData.firstName.badData.transaction1, userData.createAcctData.lastName.badData.transaction1, userData.createAcctData.password.badData.transaction1, browser)
    },

    'Can I create an account with bad data? Should receive error alert on zip code page saying "Your company isn\'t signed up with us yet..."': function(browser) {
        userFunctions.usercreateAcctBadDataFunc(userData.createAcctData.workEmail.badData.transaction2, userData.createAcctData.firstName.badData.transaction2,
            userData.createAcctData.lastName.badData.transaction2, userData.createAcctData.password.badData.transaction2, userData.createAcctData.zipCode.badData.transaction2, browser)
    },

    'Can I create an account with a bad code': function(browser) {
        userFunctions.createAcctWithBadCode(userData.createAcctData.codes.badData.code1, userData.createAcctData.codes.badData.code2, userData.createAcctData.codes.badData.code3, userData.createAcctData.codes.badData.code4, userData.createAcctData.personalEmail.goodData.transaction1, userData.createAcctData.firstName.goodData.transaction3, userData.createAcctData.lastName.goodData.transaction3, userData.createAcctData.password.goodData.transaction3, userData.createAcctData.zipCode.goodData.transaction3, browser)
    },

    'Can I create a new account with a work email and then sign in with it': function(browser) {
        userFunctions.userCreateAcctWithWorkEmailFunc(userData.createAcctData.workEmail.goodData.transaction1, userData.createAcctData.firstName.goodData.transaction1, userData.createAcctData.lastName.goodData.transaction1, userData.createAcctData.password.goodData.transaction1, userData.createAcctData.zipCode, browser)
    },

    'Can I create a new account with a code and then sign in with it': function(browser) {
        userFunctions.userCreateAcctWithCodeFunc(userData.createAcctData.codes.goodData.code1, userData.createAcctData.codes.goodData.code2, userData.createAcctData.codes.goodData.code3, userData.createAcctData.codes.goodData.code4, userData.createAcctData.personalEmail.goodData.transaction1, userData.createAcctData.firstName.goodData.transaction2, userData.createAcctData.lastName.goodData.transaction2, userData.createAcctData.password.goodData.transaction2, userData.createAcctData.zipCode.goodData.transaction2, browser)
    },

    'Can I click redeem a deal, see the required info/links, cancel that deal, and redeem another in each category': function(browser) {
        userFunctions.adminLoginFunc(browser)
        userFunctions.userRedeemingDealFunc(userSelectors.dealsScreen.dealTypes.foodBox, userData.foodDeals.goodtransaction1.dealToClick1, userData.vendorsTested.food1, browser)
        userFunctions.backButton(browser)
        userFunctions.userRedeemingDealFunc(userSelectors.dealsScreen.dealTypes.conciergeBox, userData.conciergeDeals.goodtransaction1.dealToClick2, userData.vendorsTested.concierge1, browser)
        userFunctions.backButton(browser)
        userFunctions.userRedeemingDealFunc(userSelectors.dealsScreen.dealTypes.serviceBox, userData.serviceDeals.goodtransaction1.dealToClick1, userData.vendorsTested.services1, browser)
        userFunctions.backButton(browser)
        userFunctions.userRedeemingDealFunc(userSelectors.dealsScreen.dealTypes.funBox, userData.funDeals.goodtransaction1.dealToClick1, userData.vendorsTested.fun1, browser)
    },

    'Does the "Forgot your password? feature work': function(browser) { /*This test shows that the feature is operational up to the point where it is supposed to send you a new email with your password. It stalls there and no email is receieved. */
        browser
            .waitForElementVisible(userSelectors.loginScreen.forgotPassword, 1000)
            .click(userSelectors.loginScreen.forgotPassword)
            .pause(1000)
            .waitForElementVisible(userSelectors.forgotPasswordScreen.email, 1000)
            .setValue(userSelectors.forgotPasswordScreen.email, userData.signInData.adamEmail)
            .pause(500)
            .click(userSelectors.forgotPasswordScreen.forgotButton)
    }
}