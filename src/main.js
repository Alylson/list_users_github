import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

windows.axios = axios
createApp(App).mount('#app')