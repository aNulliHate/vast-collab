<template>
    <sidebar-nav-item :classes="classList.navItem">
        <a
                :class="classList.navLink"
                :href="url"
        >
            <i :class="classList.icon"></i> {{name}}
        </a>
    </sidebar-nav-item>
</template>

<script>
import SidebarNavItem from './SidebarNavItem'
export default {
    name: 'SidebarNavLabel',
    components: {
        SidebarNavItem
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: '#'
        },
        icon: {
            type: String,
            default: 'fa fa-circle'
        },
        classes: {
            type: [String, Array, Object],
            default: ''
        },
        label: {
            type: Object,
            required: true,
            default: () => {}
        }
    },
    computed: {
        classList() {
            return {
                navItem: ['hidden-cn', ...this.itemClasses],
                navLink: 'nav-label',
                icon: [
                    this.icon ? this.icon : 'fa fa-circle',
                    this.label.variant ? `text-${this.label.variant}` : '',
                    this.label.class ? this.label.class : ''
                ].join(' ')
            }
        },
        itemClasses() {
            const classes = this.classes
            return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : Object.keys(classes).filter(i=>classes[i])
        }
    }
}
</script>