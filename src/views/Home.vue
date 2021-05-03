<template>
    <div class="home">
        <div class="p-grid">
            <div class="header">
                <img alt="Vue logo" src="../assets/logo.png" />
            </div>
            <div class="p-col-12 p-md-6 p-fluid">
                <div class="d-flex flex-row">
                    <div class="form-outline">
                        <input
                            id="pu"
                            class="form-control"
                            type="number"
                            v-model="powerUsage"
                        />
                        <label class="form-label" for="pu">{{
                            $t('powerusage')
                        }}</label>
                    </div>
                    <!--<select-box
                        :options="powerUsageUnits"
                        :default="powerUsageUnit"
                        :title="$t('powerUnit')"
                        @input="changePowerUnit"
                    />-->
                    <Dropdown
                        v-model="powerUsageUnit"
                        :options="powerUsageUnits"
                        optionLabel="name"
                        placeholder="Select"
                    />
                </div>
                <div class="d-flex flex-row">
                    <div class="form-outline">
                        <input
                            id="mi"
                            class="form-control"
                            type="number"
                            v-model="monthlyIncome"
                        />
                        <label class="form-label" for="mi">{{
                            $t('monthlyincome')
                        }}</label>
                    </div>
                    <div class="form-outline">
                        <input
                            id="di"
                            class="form-control"
                            type="number"
                            v-model="dailyIncome"
                        />
                        <label class="form-label" for="di">{{
                            $t('dailyincome')
                        }}</label>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div class="form-outline">
                        <input
                            id="hwc"
                            class="form-control"
                            type="number"
                            v-model="hardwareCosts"
                        />
                        <label class="form-label" for="hwc">{{
                            $t('hardwarecosts')
                        }}</label>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div class="form-outline">
                        <input
                            id="ec"
                            class="form-control"
                            type="number"
                            v-model="electricityCosts"
                        />
                        <label class="form-label" for="ec">{{
                            $t('electricitycosts')
                        }}</label>
                    </div>
                    <Button @click="calculate" :label="$t('calculate')" />
                </div>
                <div class="d-flex flex-row res-grid">
                    <div class="form-outline">
                        <input
                            id="dec"
                            class="form-control"
                            type="number"
                            readonly
                            v-model="dailyElecCosts"
                        />
                        <label class="form-label" for="dec">{{
                            $t('dailyeleccosts')
                        }}</label>
                    </div>
                    <div class="form-outline">
                        <!--<input
                            id="mec"
                            class="form-control"
                            type="number"
                            readonly
                            v-model="monthlyElecCosts"
                        />-->
                        <InputNumber
                            id="mec"
                            v-model="monthlyElecCosts"
                            mode="decimal"
                        ></InputNumber>
                        <label class="form-label" for="mec">{{
                            $t('monthlyeleccots')
                        }}</label>
                    </div>
                    <div class="form-outline">
                        <input
                            id="dp"
                            class="form-control"
                            type="number"
                            readonly
                            v-model="dailyProfit"
                        />
                        <label class="form-label" for="dp">{{
                            $t('dailyprofit')
                        }}</label>
                    </div>
                    <div class="form-outline">
                        <input
                            id="mp"
                            class="form-control"
                            type="number"
                            readonly
                            v-model="monthlyProfit"
                        />
                        <label class="form-label" for="mp">{{
                            $t('monthlyprofit')
                        }}</label>
                    </div>
                    <div class="form-outline">
                        <input
                            id="pom"
                            class="form-control"
                            type="number"
                            readonly
                            v-model="payoffMonth"
                        />
                        <label class="form-label" for="pom">{{
                            $t('payofftime')
                        }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { defineComponent, onMounted, ref, watch } from 'vue'
//import SelectBox from '@/components/SelectBox.vue'

export default defineComponent({
    name: 'Home',
    components: {
        //SelectBox,
    },
    setup() {
        const store = useStore()
        const i18n = useI18n()

        const powerUsageUnits = ref(['watt', 'kwh'])

        const powerUsage = ref(300)
        const powerUsageUnit = ref('watt')
        const electricityCosts = ref(0)

        const monthlyIncome = ref(0)
        const dailyIncome = ref(0)

        const hardwareCosts = ref(0)

        const monthlyElecCosts = ref(0)
        const dailyElecCosts = ref(0)
        const monthlyProfit = ref(0)
        const dailyProfit = ref(0)
        const payoffMonth = ref(0)

        onMounted(() => {
            if (localStorage.getItem('monthlyIncome'))
                monthlyIncome.value = Number(
                    localStorage.getItem('monthlyIncome')
                )

            if (localStorage.getItem('dailyIncome'))
                dailyIncome.value = Number(localStorage.getItem('dailyIncome'))

            if (localStorage.getItem('powerUsage'))
                powerUsage.value = Number(localStorage.getItem('powerUsage'))

            if (localStorage.getItem('powerUsageUnit'))
                powerUsageUnit.value = String(
                    localStorage.getItem('powerUsageUnit')
                )

            if (localStorage.getItem('electricityCosts'))
                electricityCosts.value = Number(
                    localStorage.getItem('electricityCosts')
                )

            if (localStorage.getItem('hardwareCosts'))
                hardwareCosts.value = Number(
                    localStorage.getItem('hardwareCosts')
                )
        })

        watch(monthlyIncome, (val) => {
            dailyIncome.value = val / 30
            localStorage.setItem('monthlyIncome', String(val))
        })

        watch(dailyIncome, (val) => {
            monthlyIncome.value = val * 30
            localStorage.setItem('dailyIncome', String(val))
        })

        watch(powerUsage, (val) => {
            localStorage.setItem('powerUsage', String(val))
        })

        watch(powerUsageUnit, (val) => {
            localStorage.setItem('powerUsageUnit', val)
        })

        watch(electricityCosts, (val) => {
            localStorage.setItem('electricityCosts', String(val))
        })

        watch(hardwareCosts, (val) => {
            localStorage.setItem('hardwareCosts', String(val))
        })

        //watch(monthlyProfit, (val) => {
        //    dailyProfit.value = val / 30
        //})
        //
        //watch(dailyProfit, (val) => {
        //    monthlyProfit.value = val * 30
        //})

        function changePowerUnit(val: string) {
            powerUsageUnit.value = val
        }

        function calculate() {
            /**
             * power usage / h
             */
            const kwh =
                powerUsageUnit.value === 'kwh'
                    ? powerUsage.value
                    : powerUsage.value / 1000

            /**
             * daily electricity costs
             */
            dailyElecCosts.value = kwh * 24 * electricityCosts.value

            dailyProfit.value = dailyIncome.value - dailyElecCosts.value

            monthlyElecCosts.value = dailyElecCosts.value * 31

            monthlyProfit.value = monthlyIncome.value - monthlyElecCosts.value

            payoffMonth.value = hardwareCosts.value / monthlyProfit.value
        }

        return {
            powerUsage,
            powerUsageUnit,
            monthlyIncome,
            dailyIncome,
            hardwareCosts,
            monthlyProfit,
            dailyProfit,
            payoffMonth,
            powerUsageUnits,
            changePowerUnit,
            electricityCosts,
            calculate,
            monthlyElecCosts,
            dailyElecCosts,
        }
    },
})
</script>

<style lang="scss" scoped>
</style>
