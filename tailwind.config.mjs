/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryBackground: "#FFFFFF",
				secondaryBackground: "#D9D9D9",
			},
			fontFamily: {
				sans: ['"Roboto Flex"', "sans-serif"],
				title: ['"Albert Sans"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
