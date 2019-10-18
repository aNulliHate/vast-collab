<template>
    <header
            :class="classList"
    >
        <sidebar-toggler class="d-lg-none" display="md" mobile></sidebar-toggler>
        <b-link class="navbar-brand" to="#">
            <img src="" alt="">
        </b-link>
        <sidebar-toggler class="d-md-down-none" display="lg" :defaultOpen="true"></sidebar-toggler>
        <b-navbar-nav class="d-md-down-none">
            <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
            <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>
            <b-nav-item class="px-3">Settings</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item class="d-md-down-none">
                <i class="icon-bell"></i>
                <b-badge pill variant="danger">5</b-badge>
            </b-nav-item>
            <b-nav-item class="d-md-down-none">
                <i class="icon-list"></i>
            </b-nav-item>
            <b-nav-item class="d-md-down-none">
                <i class="icon-location-pin"></i>
            </b-nav-item>
        </b-navbar-nav>
    </header>
</template>

<script>
import SidebarToggler from '@/app/shared/layout/components/LayoutSidebar/SidebarToggler'
export default {
    name: 'LayoutHeader',
    components: {
        SidebarToggler
    },
    props: {
        fixed: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classList () {
            return [
                'app-header',
                'navbar'
            ]
        }
    },
    mounted: function () {
        this.isFixed(this.fixed)
    },
    methods: {
        isFixed (fixed) {
            fixed ? document.body.classList.add('header-fixed') : document.body.classList.remove('header-fixed')
            return fixed
        }
    }
}
</script>