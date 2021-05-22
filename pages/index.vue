<template>
  <v-row justify="center" align="center">
    <v-col cols="3" sm="8" md="8">
      <!--<div class="text-center">
        <logo />
        <vuetify-logo />
      </div>-->
      <v-card class="mb-2">
        <v-card-title class="headline">
          {{ $t('power_data') }}
        </v-card-title>
        <v-card-text>
          <!--<p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>-->
          <v-row>
            <v-col sm="2" md="8">
              <v-text-field :label="$t('power_usage')" outlined></v-text-field>
            </v-col>
            <v-col sm="2" md="4">
              <v-select
                :items="dropdown_power"
                outlined
                :label="$t('energy_unit')"
                :hint="$t('energy_hint')"
                dense
                persistent-hint
              ></v-select>
            </v-col>
          </v-row>
          <v-text-field :label="$t('monthly_income')" outlined></v-text-field>
          <v-text-field :label="$t('daily_income')" outlined></v-text-field>
        </v-card-text>
      </v-card>
      <v-card class="mt-2 mb-2">
        <v-card-title class="headline">
          {{ $t('cost_data') }}
        </v-card-title>
        <v-card-text>
          <v-text-field :label="$t('hardware_costs')" outlined></v-text-field>
          <v-text-field
            :label="$t('daily_energy_costs')"
            outlined
          ></v-text-field>
          <v-text-field
            :label="$t('monthly_energy_costs')"
            outlined
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" class="mb-2 mr-2">
            {{ $t('calculate') }}
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mt-2 mb-2">
        <v-card-title class="headline">
          {{ $t('profit_data') }}
        </v-card-title>
        <v-card-text>
          <v-text-field :label="$t('daily_profit')" outlined></v-text-field>
          <v-text-field :label="$t('monthly_profit')" outlined></v-text-field>
          <v-text-field :label="$t('payoff_time')" outlined></v-text-field>
        </v-card-text>
      </v-card>
      <v-card class="mt-2">
        <v-card-title class="headline">
          {{ $t('support') }}
        </v-card-title>
        <v-card-text>
          {{ $t('support_text') }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dropdown_power: ['Watt', 'kWh'],
  }),
}
</script>

<style lang="scss">
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
