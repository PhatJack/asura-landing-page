/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'white': '#FCFDFD',
				'black': '#000000',
				'stormy': '#323334',
				'smoke': '#4E4F51',
				'ash': '#7C7F84',
				'oyster': '#DFDEDB',
				'claudy': '#F5F4F3',
				'opal': '#384353',
				'linen': '#F8F4E7'
			},
			fontFamily: {
				'montreal-neue': ['Montreal Neue', ...defaultTheme.fontFamily.sans],
				'reckless-neue': ['Reckless Neue', ...defaultTheme.fontFamily.sans],
				'reckless-neue-italic': ['Reckless Neue Italic', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				'@font-face': {
					fontFamily: 'Montreal Neue',
					fontWeight: '400',
					src: 'url(/src/font/NeueMontreal-Regular.ttf)',
				}
			})
		}),
		plugin(function ({ addBase }) {
			addBase({
				'@font-face': {
					fontFamily: 'Reckless Neue',
					fontWeight: '400',
					src: 'url(/src/font/RecklessNeue-Regular.ttf)',
				}
			})
		}),
		plugin(function ({ addBase }) {
			addBase({
				'@font-face': {
					fontFamily: 'Reckless Neue Italic',
					fontWeight: '400',
					src: 'url(/src/font/RecklessNeue-RegularItalic.ttf)',
				}
			})
		}),
	],
}