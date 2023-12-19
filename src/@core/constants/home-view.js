import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Search! Compare! Reserve!',
    text: 'Find your next favourite spot for a night out. With NightOasis app you have a myriad of choices at your fingertips. Look up new restaurants and pubs near you, and compare choices before making reservations.',
}


export const brandFeaturesContent = {
    heading: 'DISCOVER FEATURES',
    features: [
        {
            title: 'Make Reservations',
            description: 'Book a spot at some of the best and latest hotel, nighclub, restuarant and bar.',
            icon: 'stand-monitor'
        },
        {
            title: 'Review',
            description: 'Rate out of five stars and post comments of your experience.',
            icon: 'reservation-desk'
        },
        {
            title: 'Search',
            description: 'Look up places through the app’s map or the word search bar.',
            icon: 'search-list'
        },
        {
            title: 'Check-in ',
            description: 'Establishments can check in customers online at the door, making the process faster.',
            icon: 'review'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'NightOasis allows the new hotels, restaurants, pubs, and nightclubs on the block to be able to market their business on the app with information of the cuisine they offer, what time their doors open, and how much they charge. For too long, only larger and upscale establishments have been able to gain visibility with massive expenditure on marketing and representation.',
        'Users can save time and mental effort by researching every new place and then gambling on which one they should try. NightOasis offers the seamless process of comparing first before making reservations. Feel like trying something new? Go by the tried and tested reviews of others in the NightOasis app community. ',
    ],
}

export const benefitsContent = {
    heading: 'The Ultimate Booking App',
    text: 'NightOasis is a one-stop directory for all your gastronomy and entertainment needs. Whether you have to view prices, operating hours, the menu, or comments on the ambiance, the app has you covered.',
    benefits: [
        {
            title: 'More visibility',
            description: 'Up and coming restaurants that are struggling to get the word out get a chance to showcase their business on NightOasis.',
            icon: 'post-visibility'
        },
        {
            title: 'Compare Venues',
            description: 'Customers can view prices and menus of each establishment and compare before picking to visit one.',
            icon: 'awareness'
        },
        {
            title: 'Promote via Profile',
            description: 'NightOasis is a one-stop directory for all your gastronomy and entertainment needs. Whether you have to view prices, operating hours, the menu, or comments on the ambiance, the app has you covered.',
            icon: 'pin-location'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is NightOasis Compatible with Android or iOS?',
            answer: 'NightOasis is available on both Android and iOS devices.',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'Please get in touch with one of our representatives using the feedback and support information provided below.',

        },
        {
            question: 'How do I sign up?',
            answer: 'Click on the pre-registration button and input your details. ',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Explore and Book New Options Near You!',
    text: 'Sign up to download the app.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    accent: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
