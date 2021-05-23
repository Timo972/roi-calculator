<template>
  <v-app>
    <!--<v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
    <!--<v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>-->
    <v-app-bar fixed app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Return of invest - calculator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col cols="auto"
        ><v-select
          :items="languages"
          outlined
          :label="$t('language')"
          dense
          hide-details
          :value="language"
          @input="set_language"
        ></v-select
      ></v-col>
      <v-btn icon @click.stop="toggle_darkmode(!darkmode)">
        <v-icon v-if="darkmode" medium>mdi-weather-sunny</v-icon>
        <v-icon v-else medium>mdi-moon-waning-crescent</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!--<v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
    <!--<v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    },
    darkmode() {
      return this.$store.getters.darkmode
    },
    languages() {
      return Object.keys(this.$i18n.messages).map((x) => ({
        text: this.$i18n.t(x),
        value: x,
      }))
    },
  },
  watch: {
    darkmode(val) {
      this.$vuetify.theme.dark = val
    },
    language(val) {
      this.$i18n.locale = val
    },
  },
  created() {
    this.$vuetify.theme.dark = this.darkmode
    this.$i18n.locale = this.language
  },
  methods: {
    toggle_darkmode(darkmode) {
      this.$store.commit('darkmode', darkmode)
    },
    set_language(lang) {
      this.$store.commit('language', lang)
    },
  },
}
</script>
