import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: AuthLayout,
            children: [
                {
                    name: 'login',
                    path: '',
                    component: () => import('@/views/Login.vue')
                },
                {
                    name: 'signup',
                    path: '/signup',
                    component: () => import('@/views/Signup.vue')
                }
            ]
        },
        {
            path: '/school',
            component: MainLayout,
            children: [
                {
                    name: 'school',
                    path: '/',
                    component: () => import('@/views/admin/School.vue'),
                    children: [
                        
                    ]
                },
                {
                    name: 'Profile',
                    path: '/profile/:id',
                    component: () => import('@/views/Profile.vue')
                }
            ]
        }
    ]
})

export default router