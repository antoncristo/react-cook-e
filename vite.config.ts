/// <reference types="vitest" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@cooke': resolve(__dirname, 'src')
		}
	},
	test: {
		name: 'ui-unit-tests',
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/tests/setup-tests.ts'
	}
});
