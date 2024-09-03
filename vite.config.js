import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: "index.html", // Main entry point for Vite
				slider: "public/slider.html", // Additional HTML entry point if needed
			},
		},
	},
});
