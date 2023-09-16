// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/sanity',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  sanity: {
    projectId: 'u1awq07g',
    apiVersion: '2022-03-25'
  },

})