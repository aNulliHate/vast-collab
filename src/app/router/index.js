import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('../shared/layout')

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/app/views/dashboard')
            }
        ]
    },
]

export default new Router({
    mode: 'hash',
    // base: process.env.BASE_URL,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})
