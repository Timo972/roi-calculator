<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="11" md="9" lg="7" xl="6" class="scroll">
      <v-card class="mb-2" outlined>
        <v-card-title class="headline">
          {{ $t('power_data') }}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col sm="8" md="8">
              <v-text-field
                v-model="powerUsage"
                :label="$t('power_usage')"
                outlined
              ></v-text-field>
            </v-col>
            <v-col sm="4" md="4">
              <v-select
                v-model="powerUsageUnit"
                :items="dropdown_power"
                outlined
                :label="$t('energy_unit')"
                :hint="$t('energy_hint')"
                :value="powerUsageUnit"
                dense
                persistent-hint
              ></v-select>
            </v-col>
          </v-row>
          <v-text-field
            v-model="monthlyIncome"
            :label="$t('monthly_income')"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="dailyIncome"
            :label="$t('daily_income')"
            outlined
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-card class="mt-2 mb-2" outlined>
        <v-card-title class="headline">
          {{ $t('cost_data') }}
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="hardwareCosts"
            :label="$t('hardware_costs')"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="electricityCosts"
            :label="$t('electricity_costs')"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="dailyElecCosts"
            :label="$t('daily_energy_costs')"
            readonly
            outlined
          ></v-text-field>
          <v-text-field
            v-model="monthlyElecCosts"
            :label="$t('monthly_energy_costs')"
            readonly
            outlined
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" class="mb-2 mr-2" @click.stop="calculate">
            {{ $t('calculate') }}
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mt-2 mb-2" outlined>
        <v-card-title class="headline">
          {{ $t('profit_data') }}
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="dailyProfit"
            :label="$t('daily_profit')"
            outlined
            readonly
          ></v-text-field>
          <v-text-field
            v-model="monthlyProfit"
            :label="$t('monthly_profit')"
            outlined
            readonly
          ></v-text-field>
          <v-text-field
            v-model="payoffMonth"
            :label="$t('payoff_time')"
            outlined
            readonly
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-card class="mt-2" outlined>
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
    dropdown_power: [
      {
        text: 'Watt',
        value: 1000,
      },
      {
        text: 'kWh',
        value: 1,
      },
    ],
    powerUsageUnit:
      localStorage.getItem('powerUsageUnit') !== null
        ? Number(localStorage.getItem('powerUsageUnit'))
        : 1,
    powerUsage:
      localStorage.getItem('powerUsage') !== null
        ? Number(localStorage.getItem('powerUsage'))
        : 300,
    electricityCosts:
      localStorage.getItem('electricityCosts') !== null
        ? Number(localStorage.getItem('electricityCosts'))
        : 0,
    monthlyIncome:
      localStorage.getItem('monthlyIncome') !== null
        ? Number(localStorage.getItem('monthlyIncome'))
        : 0,
    dailyIncome:
      localStorage.getItem('dailyIncome') !== null
        ? Number(localStorage.getItem('dailyIncome'))
        : 0,
    hardwareCosts:
      localStorage.getItem('hardwareCosts') !== null
        ? Number(localStorage.getItem('hardwareCosts'))
        : 0,
    monthlyElecCosts:
      localStorage.getItem('monthlyElecCosts') !== null
        ? Number(localStorage.getItem('monthlyElecCosts'))
        : 0,
    dailyElecCosts:
      localStorage.getItem('dailyElecCosts') !== null
        ? Number(localStorage.getItem('dailyElecCosts'))
        : 0,
    monthlyProfit:
      localStorage.getItem('monthlyProfit') !== null
        ? Number(localStorage.getItem('monthlyProfit'))
        : 0,
    dailyProfit:
      localStorage.getItem('dailyProfit') !== null
        ? Number(localStorage.getItem('dailyProfit'))
        : 0,
    payoffMonth:
      localStorage.getItem('payoffMonth') !== null
        ? Number(localStorage.getItem('payoffMonth'))
        : 0,
  }),
  watch: {
    monthlyIncome(val) {
      this.dailyIncome = val / 30
      localStorage.setItem('monthlyIncome', String(val))
    },
    dailyIncome(val) {
      this.monthlyIncome = val * 30
      localStorage.setItem('dailyIncome', String(val))
    },
    powerUsage(val) {
      localStorage.setItem('powerUsage', String(val))
    },
    powerUsageUnit(val) {
      localStorage.setItem('powerUsageUnit', val)
    },
    electricityCosts(val) {
      localStorage.setItem('electricityCosts', String(val))
    },
    hardwareCosts(val) {
      localStorage.setItem('hardwareCosts', String(val))
    },
  },
  methods: {
    calculate() {
      /**
       * power usage / h
       */
      const kwh = this.powerUsage / this.powerUsageUnit
      // this.powerUsageUnit === 'kwh' ? this.powerUsage : this.powerUsage / 1000

      /**
       * daily electricity costs
       */
      this.dailyElecCosts = kwh * 24 * this.electricityCosts

      this.dailyProfit = this.dailyIncome - this.dailyElecCosts

      this.monthlyElecCosts = this.dailyElecCosts * 31

      this.monthlyProfit = this.monthlyIncome - this.monthlyElecCosts

      this.payoffMonth = this.hardwareCosts / this.monthlyProfit
    },
  },
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

.scroll {
  overflow-y: scroll !important;
  scrollbar-width: 1px;
  -ms-overflow-style: scrollbar;
  max-height: calc(100vh - 66px);
}

.scroll::-webkit-scrollbar {
  width: 1px;
  height: 100%;
}
</style>
