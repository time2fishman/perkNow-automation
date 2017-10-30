const userSelectors = require('../test_data/user_selectors')
const userData = require('../test_data/user_data')
const userFunctions = require('../test_data/user_functions')
module.exports = {

    beforeEach: function(browser) {
        browser
            .url('http://localhost:8080/#/login')
            .pause(3000)
    },

    after: function(browser) {
        browser.end()
    },

    'Can I sign in with good data': function(browser) {
        userFunctions.userSignInFunc(userData.signInData.goodtransaction1, browser)
    },
    'Will I get error alert when trying to sign in with bad data': function(browser) {
        userFunctions.userSignInFunc(userData.signInData.badtransaction1, browser)
        browser.acceptAlert()

        userFunctions.userSignInFunc(userData.signInData.badtransaction2, browser)
        browser.acceptAlert()
    },
}