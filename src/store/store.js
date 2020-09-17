import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: [], // All to do contacts
    },
    mutations: {
        addContact(state, i){
            state.contacts.push(i)
        },
        delContact(state, i){
            state.contacts.splice(i, 1)
        }
    }
});