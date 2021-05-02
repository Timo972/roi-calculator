import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lang from './lang'

createApp(App).use(store).use(router).use(lang).mount('#app')
