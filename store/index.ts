export const state = () => ({
    darkmode: localStorage.getItem('darkmode') !== null ? localStorage.getItem('darkmode') !== 'false' : true,
    language: localStorage.getItem('lang') !== null ? localStorage.getItem('lang') != null : 'en'
})

export const mutations = {
    darkmode(state: any, val: boolean) {
        state.darkmode = val
        localStorage.setItem('darkmode', String(state.darkmode))
    },
    language(state: any, val: string) {
        state.language = val
        localStorage.setItem('lang', state.language)
    }
}

export const getters = {
    darkmode: (state: { darkmode: boolean }) => state.darkmode,
    language: (state: { language: string }) => state.language
}