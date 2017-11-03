module.exports = {

    loginScreen: {
        loginEmail: 'input[id=email]',
        loginPassword: 'input[id=pass]',
        signInButton: 'button[id=signIn]',
        createAnAcctBtn: 'a[id=signButton]',
        forgotPassword: 'a[ui-sref=forgot]',
    },

    forgotPasswordScreen: {
        email: 'input[id=forgot_email]',
        forgotButton: 'button[ng-click="forgot()"]'
    },

    createAnAccountScreens: {
        backArrowLeft: 'div[id=backArrowLeft]',
        backArrowRight: 'div[id=backArrowRight]',

        doYouHaveWorkEmailScreen: {
            yes: 'button[ng-click="goToSignupEmail()"]',
            noButCode: 'button[ng-click="goToSignupCode()"]'
        },

        insertWorkEmailScreen: {
            newWorkEmail: 'input[ng-model="user.email"]',
            nextArrowWorkEmail: 'div[ng-click="nextSignupEmail()"]'

        },

        createYourAccountScreen: {
            firstName: 'input[ng-model="user.first_name"]',
            lastName: 'input[ng-model="user.last_name"]',
            newPassword: 'input[ng-model="user.password"]',
            showPassword: 'input[id=check_pass]',
            nextArrowCreateAcct: 'div[ng-click="nextSignupInfo()"]'
        },

        zipCodeScreen: {
            zipCode: 'input[id=zip]',
            getPerksButton: 'button[id=account-create]'
        },

        companyCodeScreen: {
            codeNumber1: 'input[ng-model="user.company_code1"]',
            codeNumber2: 'input[ng-model="user.company_code2"]',
            codeNumber3: 'input[ng-model="user.company_code3"]',
            codeNumber4: 'input[ng-model="user.company_code4"]',
            personalEmail: 'input[type=email]',
            nextArrowCodeScreen: 'div[ng-click="submitCompanyCode()"]'
        }
    },

    dealsScreen: {

        menuButton: 'button[menu-toggle=right]',
        backButton: {
            tag: 'button',
            text: 'Back'
        },

        inMenu: {
            menuTag: 'a[class=item-content]',

            requestAPerk: 'Request a Perk',
            referAVendor: 'Refer a Vendor',
            contactSupport: 'Contact Support',
            privacyPolicy: 'Privacy Policy',
            TermsCondUse: 'Terms and Conditions of Use',
            logout: 'Logout'
        },

        dealTypes: {
            featuredDeal: 'div[class="featured-deal"]',
            serviceBox: 'div[class="category-icon service"]',
            foodBox: 'div[class="category-icon food"]',
            conciergeBox: 'div[class="category-icon concierge"]',
            funBox: 'div[class="category-icon fun"]'
        },

        inDeals: {
            dealTag: 'h4',
            selectDealTag: 'div[class="deal-header shadow-spaced ng-binding"]',
            redeemButtonTag: {
                tag: 'button',
                text: 'REDEEM'
            },
            cancelButtonTag: {
                tag: 'button',
                text: 'Cancel'
            },
            redeemedButtonTag: {
                tag: 'button',
                text: 'REDEEMED'
            },
            websiteLink: 'a[class="center qa__url"]',
            callUsLink: 'a[class="center qa__phone"]',
            location: 'a[class="center qa__address ng-binding"]',
            hours: 'p[class="ng-binding"]',
        }
    }
}