import { resolve } from 'node:path'

export default defineNuxtConfig({
  router: {
    options: {
      // linkActiveClass: 'TEST'
    }
  },

  hooks: {
    'pages:extend' (pages) {
      console.log(`✅ Calling pages:extend ${pages.length} pages`)
    },
    'pages:_beforeWrite' (rootPage) {
      rootPage.insert('_new_extend', resolve('./pages/about.vue'))
    },
    'pages:_new_extend' (page) {
      console.log('⚙️ page', page.fullPath)
    }
  }
})
