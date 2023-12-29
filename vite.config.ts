import { defineConfig } from 'vite'
import path from "path";

export default defineConfig({
	build: {
		outDir: 'dist'
	},

	resolve: {
		alias: {
			'@img': path.resolve(__dirname, './src/assets/images')
		}
	},
})
