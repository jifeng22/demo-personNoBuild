// import Vuex from 'vuex'
import { Store, install } from 'vuex'
import Vue from 'vue'
import setting from './setting'
import banner from './banner'
import about from './about'
import project from './project'
// Vue.use(Vuex);
if(!window.vuex) {
    install(Vue)
}


export default new Store({
    modules: {
        setting,
        banner,
        about,
        project
    },
    strict: true
})
