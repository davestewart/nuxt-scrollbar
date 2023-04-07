import { defineNuxtPlugin, NuxtApp } from 'nuxt/app'
import PerfectScrollbar from 'vue3-perfect-scrollbar'

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  nuxt.vueApp.use(PerfectScrollbar)
})
