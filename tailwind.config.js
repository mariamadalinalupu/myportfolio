/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#fe938c",
				accent: "#4281a4",
				mainlighter: "#ffdfdd",
				maindarker: "#b26762",
				accentlighter: "#9cafb7",
				accentdarker: "#284d62",
				grey: "#161518",
			},
		},
	},
	plugins: [],
}
