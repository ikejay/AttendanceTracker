import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue'),
            children: [
                
            ]
        },
        {
            name: 'Profile',
            path: '/profile',
            component: () => import('@/views/Profile.vue')
        }

    ]
})

export default router