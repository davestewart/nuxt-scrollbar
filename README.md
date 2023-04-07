# Nuxt Scrollbar

> Nuxt wrapper for Vue 3 Perfect Scrollbar

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

## Overview

This is Nuxt 3 wrapper of [Vue 3 Perfect Scrollbar](https://www.npmjs.com/package/vue3-perfect-scrollbar) (which in turn wraps [Perfect Scrollbar](https://www.npmjs.com/package/perfect-scrollbar)).

> **A note about wrapped / alternate packages**
> 
> Unfortunately, the [wrapped](https://github.com/mercs600/vue3-perfect-scrollbar/issues) [packages](https://github.com/mdbootstrap/perfect-scrollbar/issues) seem to have gone a bit stale, so I figured it was easier to wrap the library for Nuxt 3 in a [namespaced package](https://www.npmjs.com/package/@davestewart/nuxt-scrollbar) rather hang around for one-day, some-day PRs.
> 
> Note that there is also a [Nuxt Perfect Scrollbar](https://www.npmjs.com/package/nuxt-perfect-scrollbar) package on NPM, but it's four years old, has no downloads and lacks source code ☠️. 

## Demo

To view the demo live on StackBlitz:

- https://stackblitz.com/github/davestewart/nuxt-scrollbar?file=playground%2Fapp.vue

To run the demo locally:

```
npm run dev
```

## Quick Setup

Installation:

```bash
npm install --save @davestewart/nuxt-scrollbar
```

Configuration:

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-scrollbar'
  ],
})
```

## Usage

### Markup

Basic example using scrollbar with custom settings:

```vue
<template>
  <NuxtScrollbar tag="aside" @ps-scroll-y="onScroll">
    <!-- your content -->
  </NuxtScrollbar>
</template>

<script setup>
function onScroll (event) {
  console.log(event)
}
</script>
```

Note:

- scrollbar styles are imported by default
- you'll need to set the scrollbar height for it to scroll

### Options and events

Vue 3 Perfect Scrollbar options:

- https://github.com/mercs600/vue3-perfect-scrollbar#global-options

Perfect Scrollbar options and events:

- https://perfectscrollbar.com

## Development

To develop the module:

```bash
# develop the module using the demo
npm run dev

# build and release (make sure to update version and changelog first)
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-scrollbar/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-scrollbar

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-scrollbar.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-scrollbar

[license-src]: https://img.shields.io/npm/l/nuxt-scrollbar.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-scrollbar

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
