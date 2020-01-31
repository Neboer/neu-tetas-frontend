import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './plugins/element.js'


Vue.use(VueAxios, axios);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});