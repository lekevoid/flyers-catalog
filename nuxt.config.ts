// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",

	devtools: { enabled: true },

	modules: ["@nuxt/ui", "@vite-pwa/nuxt"],

	app: {
		head: {
			charset: "utf-16",
			viewport: "width=420, initial-scale=1",
			title: "LeKevoid's Flyers",
			meta: [
				{ name: "description", content: "Flyers" },
				{ name: "robots", content: "noindex nofollow" },
			],
		},
	},

	pwa: {
		manifest: {
			name: "LeKevoid's Flyers",
			short_name: "LeKevoid's Flyers",
			background_color: "#000055",
			theme_color: "#000055",
			display: "standalone",
			icons: [
				{
					src: ".icons/manifest-icon-64.maskable.png",
					sizes: "64x64",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: ".icons/apple-icon-180",
					sizes: "180x180",
					type: "image/png",
					purpose: "any",
				},
				{
					src: "./icons/manifest-icon-192.maskable.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "any",
				},
				{
					src: "./icons/manifest-icon-192.maskable.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "./icons/manifest-icon-512.maskable.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any",
				},
				{
					src: "./icons/manifest-icon-512.maskable.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable",
				},
			],
		},
		registerWebManifestInRouteRules: true,
	},
});
