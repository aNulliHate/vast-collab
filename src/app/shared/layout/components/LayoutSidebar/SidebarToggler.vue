<template>
    <button
            :display="display"
            :mobile="mobile"
            :class="classList"
            type="button"
            @click="sidebarToggle"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
</template>

<script>
import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from '@/app/shared/services/classes'
import toggleClasses from '@/app/shared/services/toggle-classes'
export default {
    name: 'SidebarToggler',
    props: {
        defaultOpen: {
            type: Boolean,
            default: true
        },
        display: {
            type: String,
            default: 'lg'
        },
        mobile: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classList () {
            return [
                'navbar-toggler'
            ]
        }
    },
    mounted: function () {
        this.toggle(this.defaultOpen)
    },
    methods: {
        toggle (force) {
            const [display, mobile] = [this.display, this.mobile]
            let cssClass = sidebarCssClasses[0]
            if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
                cssClass = `sidebar-${display}-show`
            }
            toggleClasses(cssClass, sidebarCssClasses, force)
        },
        sidebarToggle (e) {
            e.preventDefault()
            e.stopPropagation()
            this.toggle()
        }
    }
}
</script>