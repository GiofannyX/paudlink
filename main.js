import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import VueDisqus from 'vue-disqus'
import './assets/global.css'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts';

const app = createApp(App)
app.use(router)
app.use(VueDisqus, { shortname: 'paudlink' })
app.mount('#research')
