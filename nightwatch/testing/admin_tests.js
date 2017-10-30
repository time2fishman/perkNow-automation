const selectors = ('../test_data/selectors')
const data = ('../test_data/data')
const functions = ('../test_data/functions')

module.exports = {

    beforeEach: function(browser) {
        browser
            .url('http://localhost:8080/#/login')
    },

    after: function(browser) {
        browser.end()
    }

}