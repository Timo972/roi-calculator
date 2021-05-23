export const state = () => ({
  darkmode:
    localStorage.getItem('darkmode') !== null
      ? localStorage.getItem('darkmode') !== 'false'
      : true,
  language:
    localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en',
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
})

export const mutations = {
  darkmode(state: any, val: boolean) {
    state.darkmode = val
    localStorage.setItem('darkmode', String(state.darkmode))
  },
  language(state: any, val: string) {
    state.language = val
    localStorage.setItem('lang', state.language)
  },
  powerUsageUnit(state: any, val: number) {
    state.powerUsageUnit = val
    localStorage.setItem('powerUsageUnit', String(val))
  },
  powerUsage(state: any, val: number) {
    state.powerUsage = val
    localStorage.setItem('powerUsageUnit', String(val))
  },
  electricityCosts(state: any, val: number) {
    state.electricityCosts = val
    localStorage.setItem('electricityCosts', String(val))
  },
  monthlyIncome(state: any, val: number) {
    state.monthlyIncome = val
    localStorage.setItem('monthlyIncome', String(val))
  },
  dailyIncome(state: any, val: number) {
    state.dailyIncome = val
    localStorage.setItem('dailyIncome', String(val))
  },
  hardwareCosts(state: any, val: number) {
    state.hardwareCosts = val
    localStorage.setItem('hardwareCosts', String(val))
  },
  monthlyElecCosts(state: any, val: number) {
    state.monthlyElecCosts = val
    localStorage.setItem('monthlyElecCosts', String(val))
  },
  dailyElecCosts(state: any, val: number) {
    state.dailyElecCosts = val
    localStorage.setItem('dailyElecCosts', String(val))
  },
  monthlyProfit(state: any, val: number) {
    state.monthlyProfit = val
    localStorage.setItem('monthlyProfit', String(val))
  },
  dailyProfit(state: any, val: number) {
    state.dailyProfit = val
    localStorage.setItem('dailyProfit', String(val))
  },
  payoffMonth(state: any, val: number) {
    state.payoffMonth = val
    localStorage.setItem('payoffMonth', String(val))
  },
}

export const getters = {
  darkmode: (state: { darkmode: boolean }) => state.darkmode,
  language: (state: { language: string }) => state.language,
  powerUsageUnit: (state: { powerUsageUnit: any }) => state.powerUsageUnit,
  powerUsage: (state: { powerUsage: any }) => state.powerUsage,
  electricityCosts: (state: { electricityCosts: any }) =>
    state.electricityCosts,
  monthlyIncome: (state: { monthlyIncome: any }) => state.monthlyIncome,
  dailyIncome: (state: { dailyIncome: any }) => state.dailyIncome,
  hardwareCosts: (state: { hardwareCosts: any }) => state.hardwareCosts,
  monthlyElecCosts: (state: { monthlyElecCosts: any }) =>
    state.monthlyElecCosts,
  dailyElecCosts: (state: { dailyElecCosts: any }) => state.dailyElecCosts,
  monthlyProfit: (state: { monthlyProfit: any }) => state.monthlyProfit,
  dailyProfit: (state: { dailyProfit: any }) => state.dailyProfit,
  payoffMonth: (state: { payoffMonth: any }) => state.payoffMonth,
}
