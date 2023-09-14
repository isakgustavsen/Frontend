// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/sanity',
    '@pinia/nuxt',
  ],

  css: [
    '@/assets/css/main.css',
  ],
  sanity: {
    projectId: 'oqvpwoxz'
  }
})