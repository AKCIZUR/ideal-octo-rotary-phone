export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  }
})
