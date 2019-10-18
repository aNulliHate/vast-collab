<template>
    <button class="sidebar-minimizer" type="button" @click="onclick()"></button>
</template>

<script>
import { togglePs } from '@/app/shared/mixins/tooglePs'
export default {
    name: 'sidenar-minimizer',
    mixins: [ togglePs ],
    mounted() {
        const isMinimized = document.body.classList.contains('sidebar-minimized')
        this.togglePs(!isMinimized)
    },
    methods: {
        onClick () {
            this.sidebarMinimize()
            this.brandMinimize()
        },
        sidebarMinimize () {
            const isMinimized = document.body.classList.toggle('sidebar-minimized')
            this.$emit('cui-sidebar-minimize', isMinimized)
            this.togglePs(!isMinimized)
        },
        brandMinimize () {
            document.body.classList.toggle('brand-minimized')
        }
    }
}
</script>