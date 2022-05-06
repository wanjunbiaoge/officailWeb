export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '四川北斗卫星导航平台有限公司',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'keywords',
        content: '四川北斗卫星导航平台有限公司，四川北斗，北斗，北斗导航'
      },
      {
        hid: 'description',
        name: 'description',
        content: '四川北斗卫星导航平台有限公司是在国家卫星应用主管部门和地方政府指导下，联合上海航天科技局和地方平台于2014年底设立的高新技术企业，注册资金5000万元。公司重点致力于在区域推进北斗产业化发展，提供融合北斗等新一代信息技术的行业应用整体解决方案。公司作为四川省政府授权的“北斗导航民用服务中心”，为政府、行业和消费者提供安全可靠的位置运营服务。'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: "https://api.map.baidu.com/api?v=1.0&type=webgl&ak=hIW0tTxxfLQkTEuvSsuPTEtqEPAtXroh",
    }, ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/global'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api/*': {
      target: 'http://192.168.10.224:8088/',
      // target: 'http://192.168.10.199:1090/',
      // target: 'http://192.168.10.152:1090/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  telemetry: false,
}
