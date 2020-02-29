import Vue from 'vue'
import Router from 'vue-router'

import auth from '../components/Auth.vue'
import practice from "../components/practice.vue";
import home from '../components/Home.vue'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: auth
        }, {
            path: '/practice',
            name: 'practice',
            component: practice
        }, {
            path: '/home',
            component: home
        }
    ]
})