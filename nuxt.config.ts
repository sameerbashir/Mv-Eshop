// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-05-15",
  modules: ["@nuxt/ui"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
});
