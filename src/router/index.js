import Vue from 'vue'
import Router from 'vue-router'
import Contacts from "@/components/Contacts";
import Change from "@/components/Change";

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Contacts
        },
        {
            path: '/change:id',
            name: 'Change',
            component: Change
        }
    ]
})