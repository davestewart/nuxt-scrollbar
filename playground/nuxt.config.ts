export default defineNuxtConfig({
  modules: ['../src/module'],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css' }
      ]
    }
  },

  'nuxt-scrollbar': {}
})
