import { defineConfig } from "vite";
import copy from "vite-plugin-static-copy";

export default defineConfig({
	plugins: [
		copy({
			targets: [
				{ src: "src/slider.html", dest: "" },
				{ src: "src/slider.js", dest: "" },
				{ src: "src/img/*", dest: "img" },
			],
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: "index.html", // Main entry point for Vite
				slider: "src/slider.html", // Additional HTML entry point if needed
			},
		},
	},
});
