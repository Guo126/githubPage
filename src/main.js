// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import App from './App'
import ajax from './ajax.js'
// import api from '../api/api'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)



Vue.prototype.$ajax = ajax;
// Vue.prototype.api = api;
Vue.config.productionTip = false;

// Vue.prototype.Host='/api';

/* eslint-disable no-new */
new Vue({
  name:'root',
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// Vue.store.state.commit("change","hasuahi")

// window.addEventListener('popstate',function(e) {
//   router.isBack = true
// },false)