module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Miners Standard - Winster',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ' The Miners Standard - A real taste of Derbyshire.'},
      {
        hid: `og:title`,
        property: 'og:title',
        content: `The Miners Standard`
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  modules: [
    '@nuxtjs/pwa',
    'nuxt-imagemin',
    '@nuxtjs/sitemap'
  ],
  manifest: {
    name: 'Miners Standard'
  },
  sitemap: {
    generate: true,
    hostname: 'https://theminersstandard.co.uk'
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loaders: [
            'eslint-loader'
          ],
          exclude: /(node_modules)/
        })
      }
    }
  }
}
