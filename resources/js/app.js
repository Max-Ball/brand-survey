import './bootstrap';
import { createApp } from 'vue'


import App from './App.vue'
import router from './route.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import {aliases, mdi} from "vuetify/iconsets/mdi";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createPinia} from "pinia";

const clientTheme = {
    dark: false,
    colors: {
        'primary-gray': '#D8DFE1',
        'primary-blue': '#45C3D2',
        'secondary-blue': '#00263A',
    },
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'clientTheme',
        themes: {
            clientTheme,
        },
    },
})

const app = createApp(App)
const pinia = createPinia()
app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#brand-survey')
