export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SITCON Camp Online 2021',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'SITCON Camp 2021 不畏疫情，線上舉辦！以「開源星球，源力崛起」為主軸，帶領各位一同進入開源宇宙，絕對能讓學員擁有截然不同的營隊體驗。' },
      { property: 'og:title', content: 'SITCON Camp Online 2021' },
      { property: 'og:description', content: 'SITCON Camp 2021 不畏疫情，線上舉辦！以「開源星球，源力崛起」為主軸，帶領各位一同進入開源宇宙，絕對能讓學員擁有截然不同的營隊體驗。' },
      { property: 'og:site_name', content: 'SITCON Camp Online 2021' },
      { property: 'og:locale', content: 'zh_TW' },
      //{ property: 'og:image', content: '/img/social.jpg' },
    ],
    link: [
      { rel: 'icon', href: '/2021/img/icon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1581441981/Anicons/anicons-regular.css' }
    ]
  },

  router: {
    base: '/2021/'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/rellax',
    '~/plugins/splide',
    '~/plugins/youtube',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
