/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				slack: {
					primary: "#501657",

					secondary: "#F000B8",

					accent: "#37CDBE",

					neutral: "#570DF8",

					"base-100": "#FFFFFF",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#F87272",
				},
			},
		],
	},
	theme: {
		extend: {
			colors: {},
			fontFamily: { pop: ["Poppins"], mon: ["Montserrat"] },
		},
	},
	plugins: [require("daisyui")],
};
