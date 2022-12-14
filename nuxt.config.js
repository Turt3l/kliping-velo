export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  loading: { color: '#333333', throttle: 0 },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kliping-velo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.ico' }
    ],
    link: [
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,300&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/i18n',
    'nuxt-compress'
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/pwa',
      'nuxt-lazy-load',
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ]
  ],
  i18n: {
    locales: ['lv', 'en'],
    defaultLocale: 'en',
    vueI18nLoader: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
