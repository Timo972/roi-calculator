import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import store from './store'
import lang from './lang'

import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'

const app = createApp(App)

app.component('InputNumber', InputNumber)
app.component('Dropdown', Dropdown)
app.component('Button', Button)

app.use(store)
    .use(router)
    .use(lang)
    .use(PrimeVue, { ripple: true })
    .mount('#app')
