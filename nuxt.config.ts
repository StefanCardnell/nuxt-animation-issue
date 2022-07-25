import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false, // Unsupported by Quasar vite plugin
    css: [
        "@/assets/scss/base/_all.scss",
    ],
});
