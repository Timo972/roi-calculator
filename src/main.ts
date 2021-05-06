import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lang from './lang'

const app = createApp(App)

app.use(store)
    .use(router)
    .use(lang)
    .mount('#app')
