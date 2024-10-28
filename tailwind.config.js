/** @type {import('tailwindcss').Config} */
import dropclothConfig from '@prism/dropcloth/tailwind.preset.js';

export default {
	mode: 'jit',
	prefix: 'swdc-',
	presets: [dropclothConfig],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'hcl-input': 'inset 0 0 8px rgba(0,0,0,.15)',
				'hcl-modal': '0 1em 2em -.5em rgba(0,0,0,.5)',
			},
			colors: {
				transparent: 'transparent',
			},
		},
	},
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	plugins: [],
};
