import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('@/app/shared/layout')

Vue.use(Router)

export const constantRoutes = [
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

const createRouter = () => new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export default router
