// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-svgo"],
  svgo: {
    autoImportPath: "./assets/svg/",
  },
  pages: true,
  app: {
    head: {
      title: "littleopen創作社",
      meta: [
        {
          name: "description",
          content:
            "Littleopen創作社自2021年創立，致力探討跨文化的交流融合，開展不同藝術形式的創作。每場演出因應主題不同，和不同界別的藝術家、喜歡創意和藝術的朋友進行展演",
        },
        {
          name: "keywords",
          content: "音乐社, live, 广州音乐社, 创作社, 演出, 跨文化交流",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "favicon.png" }],
    },
  },
})
