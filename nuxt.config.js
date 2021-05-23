import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Profit calculator',
    title: 'Return of invest calculator',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          power_data: 'Powerusage and income',
          cost_data: 'Electricity and hardware',
          profit_data: 'Profit and payoff time',
          calculate: 'Calculate',
          power_usage: 'Power usage',
          energy_unit: 'Energy unit',
          energy_hint: 'Select the energy unit',
          monthly_income: 'Monthly income',
          daily_income: 'Daily income',
          hardware_costs: 'Hardware costs',
          daily_energy_costs: 'Daily energy costs',
          monthly_energy_costs: 'Monthly energy costs',
          daily_profit: 'Daily profit',
          monthly_profit: 'Monthly profit',
          payoff_time: 'Return of invest',
          language: 'Language',
          en: 'English',
          de: 'German',
          support: 'Support this page',
          support_text: `Consider donating to support future development of the site.\n ETH: xyz`,
          kwh: 'kWh',
          watt: 'Watt',
          electricity_costs: 'Electricity costs',
        },
        de: {
          power_data: 'Stromverbrauch und Einkommen',
          cost_data: 'Stromkosten und Hardware',
          profit_data: 'Profit und Auszahlzeit',
          calculate: 'Berechnen',
          power_usage: 'Stromverbrauch',
          energy_unit: 'Energieeinheit',
          energy_hint: 'Wähle die Energieeinheit aus',
          monthly_income: 'Monatliches Einkommen',
          daily_income: 'Tägliches Einkommen',
          hardware_costs: 'Hardwarekosten',
          daily_energy_costs: 'Tägliche Energiekosten',
          monthly_energy_costs: 'Monatliche Energiekosten',
          daily_profit: 'Täglicher Profit',
          monthly_profit: 'Monatlicher Profit',
          payoff_time: 'Rendite der Investition',
          language: 'Sprache',
          en: 'Englisch',
          de: 'Deutsch',
          support: 'Unterstütze dieses Projekt',
          support_text: `Um die Weiterentwicklung zu unterstützen kannst du Ethereum spenden: xyz`,
          kwh: 'kWh',
          watt: 'Watt',
          electricity_costs: 'Stromkosten',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
