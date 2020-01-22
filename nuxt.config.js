require('dotenv').config();

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web&display=swap'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/animations.scss',
    '@/assets/css/colors.scss',
    '@/assets/css/style.scss',
    '@/assets/css/darkmode.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/datePicker',
    '~/plugins/modals',
    '~/plugins/darkmode',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
      // With options
    ['@nuxtjs/laravel-echo', {
        broadcaster: 'pusher',
        key: process.env.MIX_PUSHER_APP_KEY,
        cluster: process.env.MIX_PUSHER_APP_CLUSTER,
        encrypted: false,
        wsHost: process.env.WEBSOCKET_BASE_URL,
        wsPort: 6001,
        disableStats: true,
        authEndpoint: process.env.BACKEND_BASE_URL + '/broadcasting/auth',
        enabledTransports: ['ws', 'wss']
    }],
  ],
  echo: {
    authModule: true,
    connectOnLogin: true,
    disconnectOnLogout: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  auth: {
    plugins: [
      '~/plugins/event',
    ],
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/auth/user',
            method: 'get',
            propertyName: 'user'
          }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/event'
    },
    watchLoggedIn: false,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
