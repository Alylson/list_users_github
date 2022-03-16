import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle'
import router from './router'

createApp(App).use(router).use(router).mount('#app')