import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../public/assets/css/main.css'






import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

createApp(App)
.use(store)
.use(router)
.mount('#app')
