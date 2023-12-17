// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-svgo"],
  svgo: {
    autoImportPath: "./assets/svg/",
  },
  pages: true,
})
