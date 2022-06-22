import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BootstrapVue } from '../node_modules/bootstrap-vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
