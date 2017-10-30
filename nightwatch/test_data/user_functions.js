const userSelectors = require('./user_selectors')
const userData = require('./user_data')

module.exports = {

    userSignInFunc: function(object, browser) {
        browser
            .setValue(userSelectors.loginScreen.loginEmail, object.inputEmail)
            .setValue(userSelectors.loginScreen.loginPassword, object.inputPassword)
            .click(userSelectors.loginScreen.signInButton)
    }
}