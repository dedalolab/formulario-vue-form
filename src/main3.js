import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueForm from 'vue-form';

const app = createApp(App)

app.use(VueForm)
app.mount('#app')
