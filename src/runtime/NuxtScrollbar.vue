<template>
  <client-only>
    <perfect-scrollbar
      ref="el"
      :tag="tag"
      :options="options"
      :watch-options="watchOptions"
      v-bind="$attrs"
      v-on="handlers"
    >
      <slot />
    </perfect-scrollbar>
    <template #fallback>
      <component
        :is="tag"
        v-bind="$attrs"
      >
        <slot />
      </component>
    </template>
  </client-only>
</template>

<script>
import { defineNuxtComponent } from 'nuxt/app'

const events = [
  'scroll',
  'ps-scroll-y',
  'ps-scroll-x',
  'ps-scroll-up',
  'ps-scroll-down',
  'ps-scroll-left',
  'ps-scroll-right',
  'ps-y-reach-start',
  'ps-y-reach-end',
  'ps-x-reach-start',
  'ps-x-reach-end'
]

export default defineNuxtComponent({
  props: {
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },

    tag: {
      type: String,
      required: false,
      default: 'div'
    },

    watchOptions: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    handlers () {
      return events.reduce((handlers, key) => {
        handlers[key] = (...args) => this.$emit(key, ...args)
        return handlers
      }, {})
    }
  },
})
</script>

<style scoped>

</style>
