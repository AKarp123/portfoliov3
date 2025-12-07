// @ts-check
import { defineConfig } from 'astro/config';
import swup from "@swup/astro"

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://AKarp123.github.io/portfoliov3/",
	integrations: [react(), swup({
		theme: false,
		animationClass: 'transition-swup-',
	})],
	vite: {
		plugins: [tailwindcss()]
	}
});