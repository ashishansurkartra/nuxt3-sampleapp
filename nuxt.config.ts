// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      "postcss-simple-vars": {},
    },
  },
  modules: ["@nuxtjs/tailwindcss"],

  /* below settings only if you are deploying to AWS Amplify */
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser",
  },
  vite: {
    define: {
      "window.global": {},
    },
  },
});
