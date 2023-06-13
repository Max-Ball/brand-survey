import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SurveyView from "./views/SurveyView.vue";
import AuthLayout from "./components/AuthLayout.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import {useUserStore} from "./store/user.js";
import {computed} from "vue";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        meta: {requiresAuth: true},
        component: HomeView
    },
    {
        path: '/survey',
        name: 'SurveyView',
        component: SurveyView
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        meta: { isGuest: true },
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'LoginView',
                component: LoginView
            },
            {
                path: '/register',
                name: 'RegisterView',
                component: RegisterView
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next)=>{
    const userToken = computed(() => useUserStore().authUser.token)
    if (to?.meta.requiresAuth && !userToken.value) {
        next({ name: 'LoginView' })
    } else if (userToken.value && to?.meta.isGuest) {
        next({ name: 'HomeView' })
    } else {
        next()
    }
})

export default router
