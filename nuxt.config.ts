// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon'], 
  app: {
    head: {
      title: 'Relabs',
      meta: [
        {name: 'description', content: 'Test of Shatailov Alexandr'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
})
