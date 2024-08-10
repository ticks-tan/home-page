import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import svgPlugin from "vite-plugin-solid-svg";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
	plugins: [
		solidPlugin(),
		svgPlugin(),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
