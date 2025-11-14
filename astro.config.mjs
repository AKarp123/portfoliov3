// @ts-check
import { defineConfig } from 'astro/config';
import swup from "@swup/astro"

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), swup({
	
	})],
	vite: {
		plugins: [tailwindcss()]
	}
});