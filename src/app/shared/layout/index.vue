<template>
    <div id="app">
        <div class="app-body">
            <sidebar fixed>
                <sidebar-header />
                <sidebar-form />
                <sidebar-nav :nav-items="nav" />
                <sidebar-footer />
                <sidebar-minimizer />
            </sidebar>
            <main class="main">
                <div class="container-fluid">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import SidebarFooter from './components/Sidebar/SidebarFooter'
import SidebarForm from './components/Sidebar/SidebarForm'
import SidebarHeader from './components/Sidebar/SidebarHeader'
import SidebarMinimizer from './components/Sidebar/SidebarMinimizer'
import SidebarNav from "./components/Sidebar/SidebarNav/index";
export default {
    name: 'Layout',
    components: {
        Sidebar,
        SidebarFooter,
        SidebarForm,
        SidebarHeader,
        SidebarNav,
        SidebarMinimizer
    },
    data() {
        return {
            nav: [
                {
                    name: 'Dashboard',
                    url: '/dashboard',
                    icon: 'icon-speedometer',
                    badge: {
                        variant: 'primary',
                        text: 'NEW'
                    }
                }
            ]
        }
    },
    computed: {
        name () {
            return this.$route.name
        },
        list () {
            return this.$route.matched.filter((route) => route.name || route.meta.label )
        }
    }
}
</script>