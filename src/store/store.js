import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: [], // All contacts
    },
    mutations: {
        addContact(state, i){
            state.contacts.push(i)
        },
        delContact(state, i){
            state.contacts.splice(i, 1)
        },
        editContact(state, i){
            state.contacts.splice(i.i, 1, {name: i.name, number: i.number, fields: i.fields})
        }
    }
});