import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: JSON.parse(localStorage.getItem("state")) || {
        name: '123'
    },
    mutations: {},
    actions: {},
    modules: {}
})
