<template>
    <div class="app">
        <layout-header fixed></layout-header>
        <div class="app-body">
            <layout-sidebar fixed>
                <sidebar-header />
                <sidebar-form />
                <sidebar-nav :nav-items="nav" />
                <sidebar-footer />
                <sidebar-minimizer />
            </layout-sidebar>
            <main class="main">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import LayoutHeader from './components/LayoutHeader'
import LayoutSidebar from './components/LayoutSidebar'
import SidebarFooter from './components/LayoutSidebar/SidebarFooter'
import SidebarForm from './components/LayoutSidebar/SidebarForm'
import SidebarHeader from './components/LayoutSidebar/SidebarHeader'
import SidebarMinimizer from './components/LayoutSidebar/SidebarMinimizer'
import SidebarNav from "./components/LayoutSidebar/SidebarNav/index";
export default {
    name: 'Layout',
    components: {
        LayoutHeader,
        LayoutSidebar,
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