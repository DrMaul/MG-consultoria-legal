/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				customBlue: '#30475e',
				customGray: '#7e8a97',
				customBrown: '#cbaf87',
				customLigth: '#e7dec8'
			}
		},
	},
	plugins: [],
}
