import {
    anastasia_business_card_big,
    anastasia_business_card_small,
    business_card_screen_big,
    business_card_screen_small,
    child_club_screen_big,
    child_club_screen_small,
    english_course_screen_big,
    english_course_screen_small,
    evil_calculator_screen_big,
    evil_calculator_screen_small,
    expense_tracker_screen_big,
    expense_tracker_screen_small,
    online_store_screen_big,
    online_store_screen_small,
    polina_site_screen_big,
    polina_site_screen_small,
    rental_screen_big,
    rental_screen_small,
    todo_screen_big,
    todo_screen_small,
    weather_screen_big,
    weather_screen_small,
} from '../../../new-cool-site-with-animations/src/data'

export const en = {
    // Header
    header_link1: 'Main',
    header_link2: 'About me',
    header_link3: 'Prices',

    // Index
    h1_main: "Hi! I'm Danila Frolov",
    h6_main:
        'I develop various internet projects and will be happy to make a website or application for you according to your taste. Write to me and we will discuss all the details.',
    letMeShowYouMyProjects: 'Let me show you my projects',
    backToMain: 'Back to main',

    // Projects
    scroll: 'SCROLL DOWN',
    created: 'Created with:',
    openProject: 'Open project',
    previousProject: 'Previous project',
    nextProject: 'Next project',
    otherProjects: 'Other projects',

    // About
    h1_about: 'Frontend developer, freelancer and traveler',
    subtitle_about: `I'm traveling the world, getting to know the culture of different countries and working in the process. Now I'm living in Thailand.`,
    whatIUseInMyWork: 'What do I use in my work?',
    // Programming languages and frameworks
    programmingLanguages_about:
        'Programming languages, libraries and frameworks',
    javascript_about: 'Javascript',
    javascriptDescription_about:
        'ES5: if I have to work with old code. ES6+: in all other cases ',
    typescript_about: 'Typescript',
    typescriptDescription_about:
        'At the moment I use it in all new websites and applications',
    react_about: 'React.js',
    reactDescription_about: 'Next.js 13: use in all new projects ',
    stateManager_about: 'State managers',
    stateManagerDescription_about: 'Redux Toolkit, MobX, Zustand',
    cssFrameworks_about: 'CSS libraries and preprocessors',
    cssFrameworksDescription_about:
        'SCSS/SASS, CSS modules, Tailwind, MaterialUI, Bootstrap',
    animation_about: 'Animations',
    animationDescription_about: 'Framer-motion, React Transition Group',
    controlVersionSystem_about: 'Version control system',
    controlVersionSystemDescription_about: 'Git, Github',

    // Bundlers
    bundlers_about: 'Pickers and Packers',
    laravelMix_about: 'Laravel mix',
    laravelMixDescription_about:
        ' I use it if I develop a website on a clean html/css/javascript without additional libraries and frameworks',
    turbopack_about: 'Turbopack',
    turbopackDescription_about: 'Used in beta version Next.js 13',
    webpack_about: 'Webpack',
    webpackDescription_about: 'Used by default in the React.js',

    // Design
    design_about: 'Design',
    figma_about: 'Figma',
    figmaDescription_about: 'Most often used in web design development',
    adobePhotoshop_about: 'Adobe Photoshop',
    adobePhotoshopDescription_about: 'Used in working with images',
    AdobeXd_about: 'Adobe XD',
    AdobeXdDescription_about: 'I use it if for some reason I can’t use figma',
    adobeAfterEffects_about: 'Adobe After Effects',
    adobeAfterEffectsDescription_about:
        'I use it in my work with motion design',

    // Prices
    h1_prices: 'What about prices?',
    h6_prices:
        'Each project is extremely individual, so below I have indicated prices for the main development items. All project details and exact prices are discussed in detail during personal contact.',
    modalDescription_prices:
        'Choose a convenient method of communication and leave a request on the site',

    // Landing
    h1_landing: 'Landing page',
    price_landing: 'from 200$',
    description_landing:
        'Suitable for those who need a one-page site with all the information in one placе.',
    button_landing: 'To order a website',
    whatsInclude_landing: 'Included in the price',
    whatsInclude1_landing: ' Responsive design for all devices',
    whatsInclude2_landing: ' Hosting and domain setup',
    whatsInclude3_landing: ' Installing a secure SSL certificate',
    whatsInclude4_landing: ' Up to 5 blocks',
    whatsNotInclude_landing: ' Extra charge:',
    whatsNotInclude1_landing: 'Development of individual design',
    whatsNotInclude2_landing: 'Effects and animation',
    whatsNotInclude3_landing: 'Extra blocks on website',

    //Multipage
    h1_multipage: ' Multi-page site',
    price_multipage: 'from 300$',
    description_multipage:
        ' Among the standard pages on sites of this type, sections can be distinguished: "Home", "About the company", "Our services / products", etc.',
    button_multipage: 'To order a website',
    whatsInclude_multipage: 'Included in the price',
    whatsInclude1_multipage: 'Responsive design for all devices',
    whatsInclude2_multipage: 'Hosting and domain setup',
    whatsInclude3_multipage: 'installing a secure SSL certificate',
    whatsInclude4_multipage: 'up to 3 pages',
    whatsNotInclude_multipage: 'Extra charge:',
    whatsNotInclude1_multipage: 'Development of individual design',
    whatsNotInclude2_multipage: 'Effects and animation',
    whatsNotInclude3_multipage: 'Extra pages on website',

    //Business card
    h1_businessCard: 'Website business card',
    price_businessCard: 'from 150$',
    description_businessCard:
        'This site is the best solution if you want to briefly tell about yourself, your company, product or service.',
    button_businessCard: 'To order a website ',
    whatsInclude_businessCard: 'Included in the price',
    whatsInclude1_businessCard: ' Responsive template design for all devices',
    whatsInclude2_businessCard: 'Setting up hosting and domain',
    whatsInclude3_businessCard: 'Installing a secure SSL certificate',
    whatsInclude4_businessCard: 'Up to 3 blocks per site',
    whatsNotInclude_businessCard: 'Extra charge:',
    whatsNotInclude1_businessCard: 'Individual design development',
    whatsNotInclude2_businessCard: 'Effects and Animation',
    whatsNotInclude3_businessCard: 'Extra blocks on website',

    ALL_PROJECTS_TEXT: [
        {
            id: '10',
            h2text: ' Website for daily rent of apartments in St. Petersburg',
            p2text: ' Multi-page website for real estate rental in St. Petersburg',
            litext: ['Next.js 13', 'Typescript', 'MaterialUI', 'Sass'],
            externalUrl: 'https://www.welcometospb.ru/',
            imageFull: rental_screen_big,
            imageSmall: rental_screen_small,
        },

        {
            id: '9',
            h2text: 'Website for the teacher of foreign languages',
            p2text: 'A landing page with smooth animations and all the necessary information',
            litext: ['Next.js 13', 'Typescript', 'MaterialUI', 'Sass'],
            externalUrl: 'https://www.zazafox.ru/',
            imageFull: anastasia_business_card_big,
            imageSmall: anastasia_business_card_small,
        },
        {
            id: '8',
            h2text: 'Kids football club website',
            p2text: "Landing page of a children's football club from the Samara region",
            litext: ['Next.js 13', 'Typescript', 'MaterialUI'],
            externalUrl: 'https://www.dfk-bezenchuk.ru/',
            imageFull: child_club_screen_big,
            imageSmall: child_club_screen_small,
        },

        // {
        //     id: '8',
        //     h2text: ' Website for selling an English course',
        //     p2text: ' Commercial landing page for selling an online English course',
        //     litext: ['JS ES6+', 'SASS', 'Laravel Mix'],
        //     externalUrl: 'https://easyenglishyou.ru/',
        //     imageFull: english_course_screen_big,
        //     imageSmall: english_course_screen_small,
        // },
        {
            id: '7',
            h2text: ' Business card website ',
            p2text: 'Landing for a teacher of foreign languages. CSS animations, responsive layout, all information on one page',
            litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'CSS animations'],

            externalUrl: 'https://easyenglishyou.ru',
            imageFull: business_card_screen_big,
            imageSmall: business_card_screen_small,
        },
        {
            id: '6',
            h2text: 'English language school website',
            p2text: 'English language school landing page where you can choose your teacher and start learning English',
            litext: ['JS ES6+', 'SASS', 'Laravel Mix'],

            externalUrl: 'https://pollyglotiki.com/',
            imageFull: polina_site_screen_big,
            imageSmall: polina_site_screen_small,
        },
        {
            id: '5',
            h2text: 'Online shop in test mode',
            p2text: 'An online store with a fake API and basic functionality',
            litext: ['React.js/Mobx', 'MaterialUI/SASS', 'Axios/Fuse.js'],
            externalUrl: 'https://vocal-donut-4e3013.netlify.app/',
            imageFull: online_store_screen_big,
            imageSmall: online_store_screen_small,
        },

        {
            id: '4',
            h2text: 'Task list',
            p2text: 'Minimalist task list with basic functionality and smooth animations',
            litext: ['React.js', 'Typescript', 'React transition group'],
            externalUrl: 'https://gorgeous-quokka-121d0f.netlify.app/',
            imageFull: todo_screen_big,
            imageSmall: todo_screen_small,
        },
        {
            id: '3',
            h2text: 'Weather widget',
            p2text: 'Find out the weather anywhere in the world and enjoy the best photos of this place',
            litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'Fetch API'],
            externalUrl: 'https://dorogan1510.github.io/weather/',
            imageFull: weather_screen_big,
            imageSmall: weather_screen_small,
        },
        {
            id: '2',
            h2text: 'Evil calculator ',
            p2text: ' A mini game where you have to go through a small quest, play Hangman and finally get your answer',
            litext: ['React.js', 'React-Bootstrap/SASS', 'useSound'],
            externalUrl: 'https://enchanting-eclair-59989f.netlify.app/',
            imageFull: evil_calculator_screen_big,
            imageSmall: evil_calculator_screen_small,
        },
        {
            id: '1',
            h2text: 'Application for accounting finance',
            p2text: ' There is basic functionality and statistics on your spending',
            litext: [
                'React.js/Redux toolkit',
                'Typescript',
                'Material UI',
                'Framer motion',
                'Chart.js',
            ],
            externalUrl: 'https://clever-kleicha-fffcdd.netlify.app/',
            imageFull: expense_tracker_screen_big,
            imageSmall: expense_tracker_screen_small,
        },
    ],
}
