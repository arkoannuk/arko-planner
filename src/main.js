import './assets/main.scss'

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
