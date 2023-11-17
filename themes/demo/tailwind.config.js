/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'layouts/**/*.htm',
        'pages/**/*.htm',
        'partials/**/*.htm',
        "./src/**/*.{js,ts,jsx,tsx}",
        "./index.htm",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        screens: {
            'mini': '362px',
            'minitwo': '430px',
            'sm': '482px',
            'smtwo': '542px',
            'md': '770px',
            'mdtwo': '994px',
            'lg': '1026px',
            '1.5lg': '1190px',
            'xl': '1282px',
            '1.3xl': '1380px',
            '1.5xl': '1430px',
            '2xl': '1536px',
        },
        extend: {
            maxWidth: {
                'site': '1920px',
                'container': '1650px',
                'blok': '1410px',
            },
            margin: {
                '5.5': '21px',
                '7.5': '30px',
            },
            width: {
                '7.5': '30px',
                '26': '106px',
            },
            height: {
                '7.5': '30px',
            },
            colors: {
                'dark-blue': '#213f50',
                'orange': '#E67E21',
                'blue': '#0083bb',
                'light-yellow': '#FFF2D1',
                'brown': '#626262',
                'light-brown': '#E8E5EA',
                'bright-red': '#E34444',
                'blog1-bg': '#CA6100',
                'button': '#D89E78',
                'dull-grey': '#727070',
                'light-voilet': 'rgba(129, 72, 152, 0.45)',
                'violet': '#403764',
                'violet-but': '#814898',
                'pink': '#9E00B8',
                'blok1-card': '#FBF1FF',
                'blok1-banner': 'rgba(251, 241, 255, 0.80)',
            },
            borderWidth: {
                '1': '1px',
            },
            fontFamily: {
                'CormorantSC': ['CormorantSC-Regular'],
                'TTInterfaces': ['TTInterfaces-Regular'],
            },
            boxShadow: {
                'card': '0px 11px 24px 0px rgba(0, 0, 0, 0.10), 0px 43px 43px 0px rgba(0, 0, 0, 0.09), 0px 97px 58px 0px rgba(0, 0, 0, 0.05), 0px 172px 69px 0px rgba(0, 0, 0, 0.01), 0px 268px 75px 0px rgba(0, 0, 0, 0.00)',
                'blok1': 'inset 0px 0px 50px 12px rgba(73 69 69 / 0.4)',
                'blog2': 'inset 0px 0px 40px 15px rgb(11 102 122 / 20%)',
                'white-blog': 'inset 0px 0px 40px 15px rgb(255 255 255 / 0.7)',
                'light-black': '0 0px 30px 0px rgb(0 0 0 / 20%)',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

