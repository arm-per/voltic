module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                    'slider': '480px',
            },
            colors:{
                voltic:{
                    blue: {
                        '50':  '#e8ecee',
                        '100': '#d2dadd',
                        '200': '#a5b4ba',
                        '300': '#778f98',
                        '400': '#4a6975',
                        '500': '#1d4453',
                        '600': '#1a3d4b',
                        '700': '#14303a',
                        '800': '#0f222a',
                        '900': '#091419',
                    },
                    red: {
                        '50':  '#fce6e9',
                        '100': '#f9cdd2',
                        '200': '#f49ba5',
                        '300': '#ee6978',
                        '400': '#e9374b',
                        '500': '#e3051e',
                        '600': '#cc051b',
                        '700': '#9f0415',
                        '800': '#72030f',
                        '900': '#440109',
                    },
                    gray:{
                        '50':  '#e8e8e8',
                        '100': '#d2d2d1',
                        '200': '#a5a5a4',
                        '300': '#777776',
                        '400': '#4a4a49',
                        '500': '#1d1d1b',
                    },
                },
            },
        },
    },
    variants: {
    extend: {},
    },
    plugins: [],
}
