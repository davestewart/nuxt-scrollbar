import { defineNuxtModule, createResolver, addComponent, addPlugin } from '@nuxt/kit'
import { Nuxt } from '@nuxt/schema'

export interface ModuleOptions {}

const { resolve } = createResolver(import.meta.url)

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-scrollbar',
    configKey: 'nuxt-scrollbar',
  },

  async setup (options, nuxt: Nuxt) {
    addPlugin(resolve('./runtime/plugin'))
    nuxt.options.css.push('vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css')
    addComponent({
      name: 'NuxtScrollbar',
      filePath: resolve('./runtime/NuxtScrollbar.vue'),
      global: true,
    })
  }
})
