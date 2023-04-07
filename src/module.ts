import { defineNuxtModule, createResolver, addComponent, addPlugin } from '@nuxt/kit'
import { Nuxt } from '@nuxt/schema'

const { resolve } = createResolver(import.meta.url)

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-scrollbar',
    configKey: 'nuxt-scrollbar',
  },

  async setup (options, nuxt: Nuxt) {
    nuxt.options.css.push('vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css')
    addPlugin(resolve('./runtime/plugin'))
    addComponent({
      name: 'NuxtScrollbar',
      filePath: resolve('./runtime/NuxtScrollbar.vue'),
      global: true,
    })
  }
})
