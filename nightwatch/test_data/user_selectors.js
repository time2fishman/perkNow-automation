module.exports = {

    loginScreen: {
        loginEmail: 'input[id=email]',
        loginPassword: 'input[id=pass]',
        signInButton: 'button[id=signIn]',
        createAnAcctBtn: 'a[id=signButton]',
        forgotPassword: 'a[ui-sref=forgot]'
    },

    createAnAccountScreens: {
        backArrowLeft: 'div[id=backArrowLeft]',
        backArrowRight: 'div[id=backArrowRight]',

        doYouHaveWorkEmailScreen: {
            workEmailTag: 'button[class=signup-button]',
            yes: 'Yes',
            noButCode: 'No, but I have a code'
        },

        insertWorkEmailScreen: {
            newWorkEmail: 'input[type=email]'
        },

        createYourAccountScreen: {
            firstName: 'input[placeholder=First Name]',
            LastName: 'input[placeholder=Last Name]',
            newPassword: 'input[placeholder=Password]',
            showPassword: 'input[id=check_pass]'
        },

        zipCodeScreen: {
            zipCode: 'input[id=zip]',
            getPerksButton: 'button[id=account-create]'
        },

        companyCodeScreen: {
            codeNumber1: 'input[ng-model=user.company_code1]',
            codeNumber2: 'input[ng-model=user.company_code2]',
            codeNumber3: 'input[ng-model=user.company_code3]',
            codeNumber4: 'input[ng-model=user.company_code4]',
            personalEmail: 'input[placeholder=Personal Email]'
        }
    },

    dealsScreen: {

        menuButton: 'button[menu-toggle=right]',
        backButton: 'button[class=button back-button buttons button-white button-clear header-item]',

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
            featuredDeal: 'div[class=featured-deal]',
            serviceBox: 'div[class=category-icon service]',
            foodBox: 'div[class=category-icon food]',
            conciergeBox: 'div[class=category-icon concierge]',
            funBox: 'div[class=category-icon fun]'
        },

        inDeals: {
            dealTag: 'h4[class=vendor-foooter-text ng-binding]',
            redeemButton: 'button[id=redeem-button]',
            cancelButton: 'button[id=redeem-cancel]',
            redeemedButton: 'button[class=button button-dark]',
            websiteLink: 'span[id=browser-icon]',
            callUsLink: 'span[id=phone-icon]'

        }
    }
}