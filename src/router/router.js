import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

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
            path: '/main',
            component: MainLayout,
            children: [
                {
                    name: 'school',
                    path: '/',
                    component: () => import('@/views/admin/index.vue'),
                    children: [
                    ]
                },
                {
                    path: '/dashboard',
                    component: DashboardLayout,
                    children: [
                        {
                            name: 'student_dashboard',
                            path: '',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'branches',
                            path: '/branches',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'classes',
                            path: '/classes',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'students',
                            path: '/students',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'teachers',
                            path: '/teachers',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'calendar',
                            path: '/calendar',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'attendance',
                            path: '/attendance',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'report',
                            path: '/report',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                        {
                            name: 'users',
                            path: '/users',
                            component: () => import('@/views/admin/Summary.vue')
                        },
                    ]
                },
                {
                    name: 'user_profile',
                    path: '/edit_user',
                    component: () => import('@/views/user/Profile.vue')
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