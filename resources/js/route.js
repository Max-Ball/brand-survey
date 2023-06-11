import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SurveyView from "./views/SurveyView.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
        {
            path: '/survey',
            name: 'SurveyView',
            component: SurveyView
        },
    ]
})

export default router
