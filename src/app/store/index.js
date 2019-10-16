import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleScripts = require.context('./modules', false, /.*.js$/)

const modules = moduleScripts.keys()
    .map(file => [file.replace(/(^.\/)|(\.js$)/g, ''), moduleScripts(file)])
    .reduce((modules, [name, module]) => {
        if (module.namespaced === undefined) {
            module.namespaced = true
        }
        return { ...modules, [name]: module }
    }, {})

export default new Vuex.Store({
    modules
})