import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

import router from './router'
import main from './main.vue'

Vue.use(VueAxios, axios);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    render: h => h(main)
});