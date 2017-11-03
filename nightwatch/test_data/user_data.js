module.exports = {

    signInData: {
        goodtransaction1: {
            inputEmail: 'admin@perknow.com',
            inputPassword: 'whatever'
        },
        badtransaction1: {
            inputEmail: 'random@hotmail.com',
            inputPassword: 'nogood'
        },
        badtransaction2: {
            inputEmail: 'aloha@godaddy.com',
            inputPassword: 'hawaii'
        },
        adamEmail: 'adam_h_martinez@hotmail.com'
    },


    createAcctData: {
        workEmail: {
            goodData: {
                transaction1: 'test1@gmail.com',
                transaction2: 't@devmtn.com',
                transaction3: 'testmaximumeffort@hotmail.com'
            },
            badData: {
                transaction1: '',
                transaction2: 'hellomotto@weber.edu'
            }
        },
        personalEmail: {
            goodData: {
                transaction1: 'personal@gmail.com',
                transaction2: 'personal2@gmail.com'
            },
            badData: {
                transaction1: ''
            }
        },

        firstName: {
            goodData: {
                transaction1: 'Poo-Joe',
                transaction2: 'Ed',
                transaction3: 'Ferdinandmilkavitch3'
            },
            badData: {
                transaction1: '',
                transaction2: 'Papa'
            }
        },

        lastName: {
            goodData: {
                transaction1: 'Martinez',
                transaction2: 'O\'banion',
                transaction3: 'P1'
            },
            badData: {
                transaction1: '',
                transaction2: 'John'
            }
        },
        password: {
            goodData: {
                transaction1: 'Apollo',
                transaction2: '123&JHYln',
                transaction3: 'A'
            },
            badData: {
                transaction1: '',
                transaction2: 'password'
            }
        },

        zipCode: {
            goodData: {
                transaction1: '84111',
                transaction2: '4',
                transaction3: '87965411'
            },
            badData: {
                transaction1: '',
                transaction2: '123'
            }
        },

        codes: {
            goodData: {
                code1: '0',
                code2: '0',
                code3: '0',
                code4: '1'
            },
            badData: {
                code1: '5',
                code2: 'h',
                code3: '7',
                code4: '8'
            }
        }

    },



    featuredDeals: {
        goodtransaction1: {
            dealToClick1: '10 20% off',
            dealToClick2: 'donuts',
            dealToClick3: '10 50% off'
        }
    },

    serviceDeals: {
        goodtransaction1: {
            dealToClick1: '5 50% off',
            dealToClick2: '13 20% off',
            dealToClick3: '22 20% off'
        }
    },

    foodDeals: {
        goodtransaction1: {
            dealToClick1: '3 20% off',
            dealToClick2: 'free food',
            dealToClick3: '11 50% off'
        }
    },

    conciergeDeals: {
        goodtransaction1: {
            dealToClick1: '1 50% off',
            dealToClick2: '2 50% off',
            dealToClick3: '9 50% off'
        }
    },

    funDeals: {
        goodtransaction1: {
            dealToClick1: '7 20% off',
            dealToClick2: '15 20% off',
            dealToClick3: '24 50% off'
        }
    },

    vendorsTested: {
        food1: {
            deals: {
                deal1: '3 20% off'
            },
            locationLine1: '123 NJHUYTG St',
            locationLine2: 'KLN, UT 84043',
            locationUrl: "https://maps.google.com/?q=123%20NJHUYTG%20St%20KLN%20UT",
            phone: 'tel:123-456-7890',
            website: "https://goo.gl/2xj7bs",
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        },

        concierge1: {
            deals: {
                deal1: '2 50% off'
            },
            locationLine1: '123 NJHUYTG St',
            locationLine2: 'KLN, VT 84043',
            locationUrl: 'https://maps.google.com/?q=123%20NJHUYTG%20St%20KLN%20VT',
            phone: 'tel:123-456-7890',
            website: 'https://goo.gl/2xj7bs',
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        },

        services1: {
            deals: {
                deal1: '5 50% off'
            },
            locationLine1: '123 NJHUYTG St',
            locationLine2: 'KLN, UT 84043',
            locationUrl: 'https://maps.google.com',
            phone: 'tel:123-456-7890',
            website: 'https://goo.gl/2xj7bs',
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        },

        fun1: {
            deals: {
                deal1: '7 20% off',
            },
            locationLine1: '123 NJHUYTG St',
            locationLine2: 'KLN, UT 84043',
            locationUrl: "https://maps.google.com/?q=123%20NJHUYTG%20St%20KLN%20UT",
            phone: 'tel:123-456-7890',
            website: 'https://goo.gl/2xj7bs',
            hoursLine1: 'Weekday hours: 9-5',
            hoursLine2: 'Saturday hours: 9-5',
            hoursLine3: 'Sunday hours: Closed'
        }


    }
}