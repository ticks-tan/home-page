/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx,js,jsx}", "./index.html"],
	darkMode: ["selector", '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				bgColor: "var(--theme-bg)",
				textColor: "var(--theme-text)",
				accent: "var(--theme-accent)",
				surface: "var(--theme-surface)",
				highlight: "var(--theme-highlight)",
			},
		},
	},
	plugins: [],
};
