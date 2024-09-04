import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				slider: resolve(__dirname, "slider.html"),
			},
		},
	},
});
