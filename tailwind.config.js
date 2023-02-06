/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./ui/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat Alternates', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				"custom-blue": "rgb(5, 0, 56)",
				"ligth-blue": "#8fccfe",
				"color-link": "#40AFFF"
			}
		},
	},
	plugins: [],
}
