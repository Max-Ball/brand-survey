import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SurveyView from "./views/SurveyView.vue";
import AuthLayout from "./components/AuthLayout.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'HomeView',
            meta: { requiresAuth: true },
            component: HomeView
        },
        {
            path: '/survey',
            name: 'SurveyView',
            component: SurveyView
        },
        {
            path: '/login',
            name: 'LoginView',
            component: LoginView
        },
        {
            path: '/register',
            name: 'RegisterView',
            component: RegisterView
        },
        // {
        //     path: '/auth',
        //     redirect: '/login',
        //     name: 'Auth',
        //     meta: { isGuest: true },
        //     component: AuthLayout,
        //     children: [
        //         {
        //             path: '/login',
        //             name: 'Login',
        //             component: LoginView
        //         },
        //         {
        //             path: '/register',
        //             name: 'Register',
        //             component: RegisterView
        //         }
        //     ]
        // }
    ]
})

// router.beforeEach((to, from, next)=>{
//     if (to.meta.requiresAuth && !auth.state.user.token) {
//         next({ name: 'Login' })
//     } else if (store.state.user.token && to.meta.isGuest) {
//         next({ name: 'Dashboard' })
//     } else {
//         next()
//     }
// })

export default router
