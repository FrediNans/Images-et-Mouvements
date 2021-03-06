import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{ lang: "fr" },
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1, shrink-to-fit=no",
				},
			],
			script: [
				{
					src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
					integrity:
						"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
					crossorigin: "anonymous",
				},
				{
					src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js",
					integrity:
						"sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF",
					crossorigin: "anonymous",
				},
				// <script src="https://myawesome-lib.js"></script>
			],
			link: [
				// <link rel="stylesheet" href="https://myawesome-lib.css">
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/icon?family=Material+Icons",
				},
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css",
					integrity:
						"sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn",
					crossorigin: "anonymous",
				},
			],
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/style/global.scss";',
				},
			},
		},
	},
});
