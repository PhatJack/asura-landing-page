/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'white' : '#FCFDFD',
				'black' : '#000000',
				'stormy' : '#323334',
				'smoke': '#4E4F51',
				'ash' : '#7C7F84',
				'oyster' : '#DFDEDB',
				'claudy' : '#F5F4F3',
				'opal' : '#384353',
				'linen' : '#F8F4E7'
			}
		},
	},
	plugins: [],
}