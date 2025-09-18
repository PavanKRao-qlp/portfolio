/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
    themes: ["light", "dark", "sunset"], // enable both
    base: true,                // applies theme class automatically
    darkTheme: ["sunset"],         // used *only* when system is dark
  },
}
